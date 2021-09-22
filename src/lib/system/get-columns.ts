import { and, newline } from '../constant/delims'

export const getColumns = (where?: string) => [
    `SELECT *`,
    `FROM information_schema.columns${where ? and + where : ''}`
].join(newline);