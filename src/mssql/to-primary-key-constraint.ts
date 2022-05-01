export function toPrimaryKeyConstraint(table: string, columns: string[]) {
    return `ALTER TABLE ${table} ADD CONSTRAINT PK_${table}_${columns.join('_')} 
PRIMARY KEY (${columns.join(', ')})`;
};
