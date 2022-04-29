
export function toInsertScript(table: string, values: any[], options?: any) {
    const columns = Object.keys(values[0]).sort();
    return `
INSERT INTO ${table}
(${columns.join(', ')})
VALUES
${getValues(columns, values, options)};`;
}

function getValues(columns, values, options?: any) {
    return values.map(v => {
        return columns.map(c => {
            return options && options[c] && options[c].query
            ? `(${options[c].query(v, c)})`
            : `${extractValue(v, c)}`
        }).join(', ')
    }).map(exp => `(${exp})`).join(', ')
}

function extractValue(obj, propName) {
    const val = obj[propName];

    if (val === null) {
        return 'NULL';
    }

    let numeric = Number(val);

    if (numeric) {
        return numeric;
    }

    return `'${val}'`;
}