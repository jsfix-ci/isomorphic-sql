import { and, newline } from '../constant/delims'
export const getTables = (where?: string) => [
    `SELECT *`,
    `FROM pg_catalog.pg_tables`,
    `WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema'${where ? and + where : ''}`,
].join(newline)