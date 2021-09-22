import { columnColumnNames as columns } from "../constant/column-column-names";
import { csv, newline } from "../constant/delims";
const alias = 'c';

export const getDefs = (schemaname = 'public') => ({
    sql: [
        `SELECT ${columns.join(csv)} from (`,
        `   SELECT ${columns.map(c => `${alias}.${c}`)}`,
        `   FROM pg_catalog.pg_tables t`,
        `   INNER JOIN information_schema.columns ${alias} on ${alias}.table_name = t.tablename`,
        `   WHERE schemaname = '${schemaname}'`,
        `   ORDER BY tablename`,
        `) def`
    ].join(newline),
    columns
});