import { pipe } from '../../common/constant/delims';

const delimeter = pipe.trim();

export const parse = (columns: string[], delimitedRecord: string, delim = delimeter) => {
    const values = delimitedRecord.split(delim);

    return columns.reduce((result, column, idx) => {
        result[column] = values[idx];
        return result;
    }, {});
};
