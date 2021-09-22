import { getTables } from './get-tables';

describe('getTables', () => {
    it('returns a sql string', () => {
        expect(getTables()).toMatchSnapshot();
    });
});