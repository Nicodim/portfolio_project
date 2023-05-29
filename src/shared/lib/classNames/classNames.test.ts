import { classNames } from './classNames';

describe('className', () => {
    test('with firs param only', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass cls1 cls2';
        expect(classNames('someClass', {}, ['cls1, cls2'])).toBe(expected);
    });
    test('with mods additional params', () => {
        const expected = 'someClass cls1 cls2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['cls1, cls2'])).toBe(expected);
    });
    test('with false', () => {
        const expected = 'someClass cls1 cls2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['cls1, cls2'])).toBe(expected);
    });
    test('with undefined', () => {
        const expected = 'someClass cls1 cls2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['cls1, cls2'])).toBe(expected);
    });
});
