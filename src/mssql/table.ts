import { toForeignKeyConstraint, toPrimaryKeyConstraint, toUniqueConstraint } from ".";

export interface IColumn {
    name: string;
    dataType: string;
    primaryKey?: boolean;
    identity?: number[];
    nullable: boolean;
}

export interface IColumnOptions {
    primaryKey?: IColumn['primaryKey'];
    identity?: IColumn['identity'];
    nullable?: IColumn['nullable'];
}

const tab = '  ';

export class Table {
    private columns: IColumn[] = [];
    private constraints: string[] = [];

    private constructor(public name: string) { }

    static named(name: string) {
        return new Table(name);
    }

    column(name: string, dataType: string, options?: IColumnOptions) {
        const { primaryKey, identity, nullable } = options || {};
        this.columns.push({ name, dataType, primaryKey, identity, nullable });
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
            `${tab}${c.name} ${c.dataType} ${c.primaryKey ? 'PRIMARY KEY' : ''} ${c.identity ? `IDENTITY(${c.identity.join(', ')})` : ''} ${c.nullable ? 'NULL' : 'NOT NULL'}`
        ).join(',\n')}
);
        
${this.constraints.join(';\n')}
`;
    }
}