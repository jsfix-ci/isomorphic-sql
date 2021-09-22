import { and, csv } from './util/delims';
const deleted = 'deleted_at';

export const denorm = (table: string, columnNames: string[], primaryColumnNames: string[]) => {
    const selectDuplicitousRecords = [
        `SELECT COUNT(*), ${columnNames.join(csv)}`,
        `FROM ${table}`,
        `GROUP BY ${columnNames.join(csv)}`,
        `HAVING COUNT(*) > 1`,
    ].join(' ');

    const selectDuplicitousIds = [
        `SELECT ${columnNames.map((cn) => `dups.${cn}`).join(csv)}, ${table}.created_at, ${table}.id`,
        `FROM (${selectDuplicitousRecords}) AS dups`,
        `INNER JOIN ${table} ON ${[...primaryColumnNames.map((cn) => `${table}.${cn} = dups.${cn}`)].join(and)}`,
        `AND ((dups.${deleted} IS NULL AND ${table}.${deleted} IS NULL) OR ${table}.${deleted} = dups.${deleted})`,
        `ORDER BY ${table}.created_at ASC`,
    ].join(' ');

    return selectDuplicitousIds;
};