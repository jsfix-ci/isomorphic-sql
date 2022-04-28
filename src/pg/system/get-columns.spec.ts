import { getColumns } from './get-columns';

describe('getColumns', () => {
    it('returns a sql string', () => {
        expect(getColumns()).toMatchSnapshot();
    });
});