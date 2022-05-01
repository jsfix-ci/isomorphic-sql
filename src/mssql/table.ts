import { toForeignKeyConstraint, toPrimaryKeyConstraint, toUniqueConstraint } from ".";

const tab = '  ';

export class Table {
    private columns: { name: string, dataType: string, primaryKey?: boolean, identity?: number[] }[] = [];
    private constraints: string[] = [];

    private constructor(public name: string) { }

    static named (name: string) {
        return new Table(name);
    }

    column(name: string, dataType: string, identity?, primaryKey: boolean = false) {
        this.columns.push({ name, dataType, primaryKey, identity  });
        return this;
    }

    pk(...columns: string[]) {
        this.constraints.push(toPrimaryKeyConstraint(this.name, columns));
        return this;
    }

    fk(column: string, targetTable: string, targetColumn: string) {
        this.constraints.push(toForeignKeyConstraint(this.name, column, targetTable, targetColumn));
        return this;
    }

    unique(...columns: string[]) {
        this.constraints.push(toUniqueConstraint(this.name, columns));
        return this;
    }

    create() {
        return `CREATE TABLE ${this.name} (
${this.columns.map(c => 
    `${tab}${c.name} ${c.dataType} ${c.primaryKey ? 'PRIMARY KEY' : ''} ${c.identity ? `IDENTITY(${c.identity.join(', ')})` : ''}`
).join(',\n')}
);
        
${this.constraints.join(';\n')}
`;
    }
}