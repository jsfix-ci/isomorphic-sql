import { toInsertScript } from './to-insert-script';

const foods = [
    { event_date: '2022-01-01', name: 'hotdogs', satisfaction: '1' },
    { event_date: '2022-01-02', name: 'chimichangas', satisfaction: '100' },
    { event_date: '2022-01-03', name: 'pizza', satisfaction: null },
];

describe('toInsertScript', () => {
    describe('basic use', () => {
        it('returns a parenthesized value expression', () => {
            expect(toInsertScript('foods', foods)).toMatchSnapshot();
        });
    });

    describe('nested query use', () => {
        it('returns a parenthesized value expression with a nested query based on the options', () => {
            expect(toInsertScript('foods', foods, {event_date: {
                query: (obj, c) => `select id from atnd_event_date where event_date = '${obj[c]}'`
            }})).toMatchSnapshot();
        });
    });
});