
export function toInsertScript(table: string, values: any[]) {
    const columns = Object.keys(values[0]).sort();
    return `
INSERT INTO ${table}
(${columns.join(', ')})
VALUES
${getValues(columns, values)}`;
}

function getValues(columns, values) {
    return values.map(v => {
        return columns.map(c => {
            return `'${v[c]}'`
        }).join(', ')
    }).map(exp => `(${exp})`).join(', ')
}