import { columnColumnNames } from "../constant/column-column-names";
import { tableColumnNames } from '../constant/table-column-names';
import { newline } from "../constant/delims";
const column = 'c';
const table = 't';

export const getDefs = (schemaname = 'public') => ({
    sql: [
        `   SELECT ${columnColumnNames.map(c => `${column}.${c}`)}, ${tableColumnNames.map(t => `${table}.${t}`)}`,
        `   FROM pg_catalog.pg_tables ${table}`,
        `   INNER JOIN information_schema.columns ${column} on ${column}.table_name = ${table}.tablename`,
        `   WHERE schemaname = '${schemaname}'`,
        `   ORDER BY tablename`,
    ].join(newline),
    columns: [...columnColumnNames, ...tableColumnNames]
});