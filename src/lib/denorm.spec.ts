import { denorm } from './denorm';

describe('denorm', () => {
    it('returns a sql string', () => {
        expect(denorm('person', ['first_name', 'last_name'], ['first_name', 'last_name', 'deleted_at'])).toMatchSnapshot();
    });
});