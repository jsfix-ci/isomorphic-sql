export function toForeignKeyConstraint (table: string, column: string, targetTable: string, targetColumn: string) {
    return `ALTER TABLE ${table} ADD CONSTRAINT FK_${table}_${column}_${targetTable}_${targetColumn} 
FOREIGN KEY ${column} REFERENCES ${targetTable}(${targetColumn})`;
};