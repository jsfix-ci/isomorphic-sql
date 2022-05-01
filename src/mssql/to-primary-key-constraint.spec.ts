import { toPrimaryKeyConstraint } from './to-primary-key-constraint';

describe('toPrimaryKeyConstraint', () => {
    it('returns an add-constraint expression for a single primary key', () => {
        expect(toPrimaryKeyConstraint('posts', ['slug'])).toMatchSnapshot();
    });

    it('returns an add-constraint expression for a composite primary key', () => {
        expect(toPrimaryKeyConstraint('posts', ['slug', 'author_id'])).toMatchSnapshot();
    });
});