import { toForeignKeyConstraint } from './to-foreign-key-constraint';

describe('toForeignKeyConstraint', () => {
    it('returns an add-constraint expression for foreign keys', () => {
        expect(toForeignKeyConstraint('posts', 'author_id', 'author', 'id')).toMatchSnapshot();
    });
});