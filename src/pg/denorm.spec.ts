import { denorm } from './denorm';

describe('denorm', () => {
    it('returns a sql string', () => {
        expect(denorm('person', ['person_type_id'], ['deleted_at'], ['first_name', 'last_name'])).toMatchSnapshot();
    });
});