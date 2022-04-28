import {toInsertScript} from './to-insert-script';
describe('asValue', () => {
    it('returns a parenthesized value expression', () => {
        expect(toInsertScript('foods', [
            {name: 'hotdogs'},
            {name: 'chimichangas'},
        ])).toMatchSnapshot();
    });
});