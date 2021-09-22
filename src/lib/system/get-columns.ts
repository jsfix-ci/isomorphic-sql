import { columnColumnNames } from '../constant/column-column-names';
import { csv, newline } from '../constant/delims'

export const getColumns = (columns = columnColumnNames) => ({
    sql: [
        `SELECT ${columns.join(csv)}`,
        `FROM information_schema.columns`
    ].join(newline),
    columns
});