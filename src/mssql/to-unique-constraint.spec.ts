import { toUniqueConstraint } from './to-unique-constraint';

describe('toUniqueConstraint', () => {
    describe('single column use', () => {
        it('returns an add-constraint expression for uniqueness', () => {
            expect(toUniqueConstraint('foods', ['plu'])).toMatchSnapshot();
        });
    });

    describe('multi column use', () => {
        it('returns an add-constraint expression for uniqueness', () => {
            expect(toUniqueConstraint('events', ['event_date', 'event_location'])).toMatchSnapshot();
        });
    });
});