import { and, csv } from '../common/constant/delims';

export const denorm = (table: string, nullableColumnNames: string[], nonNullableColumnNames: string[], additionalColumnsToSelect: string[] = []) => {
    const columnNames = [...nullableColumnNames, nonNullableColumnNames];

    const selectDuplicitousRecords = [
        `SELECT COUNT(*), ${columnNames.join(csv)}`,
        `FROM ${table}`,
        `GROUP BY ${columnNames.join(csv)}`,
        `HAVING COUNT(*) > 1`,
    ].join(' ');

    const selectDuplicitousIds = [
        `SELECT ${columnNames.map((cn) => `dups.${cn}`).join(csv)}${additionalColumnsToSelect.length ? csv : ''} ${additionalColumnsToSelect.join(csv)}`,
        `FROM (${selectDuplicitousRecords}) AS dups`,
        `INNER JOIN ${table} ON ${[...nonNullableColumnNames.map((cn) => `${table}.${cn} = dups.${cn}`)].join(and)}`,
        and,
        nullableColumnNames.map(deleted => `((dups.${deleted} IS NULL AND ${table}.${deleted} IS NULL) OR ${table}.${deleted} = dups.${deleted})`).join(and),
        `ORDER BY ${table}.created_at ASC`,
    ].join(' ');

    return selectDuplicitousIds;
};