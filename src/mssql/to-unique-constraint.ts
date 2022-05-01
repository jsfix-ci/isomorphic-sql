export function toUniqueConstraint (table: string, columns: string[]) {
    return `ALTER TABLE ${table} ADD CONSTRAINT IX_${table}_${columns.join('_')}_unique UNIQUE(${columns.join(', ')})`;
};