import { getDefs } from './get-defs';

describe('getDefs', () => {
    it('returns a sql string', () => {
        expect(getDefs()).toMatchSnapshot();
    });
});