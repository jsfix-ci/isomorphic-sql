import { tableColumnNames } from '../constant/table-column-names';
import { csv, newline } from '../../common/constant/delims';

export const getTables = (columns = tableColumnNames) => ({
    sql: [
        `SELECT ${columns.join(csv)}`,
        `FROM pg_catalog.pg_tables`,
        `WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema'`,
    ].join(newline),
    columns
});