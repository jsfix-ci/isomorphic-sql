import { toInsertScript } from './to-insert-script';
describe('asValue', () => {
    it('returns a parenthesized value expression', () => {
        expect(toInsertScript('foods', [
            { name: 'hotdogs', satisfaction: '1' },
            { name: 'chimichangas', satisfaction: '100' },
            { name: 'pizza', satisfaction: null },
        ])).toMatchSnapshot();
    });
});