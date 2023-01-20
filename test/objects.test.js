import {Objects} from "../src/object/objects.js";

test('test object size', () => {
    expect(Objects.size({a:1, b:2})).toBe(2);
});

test('test object join', () => {
    expect(Objects.join({a:1, b:2}, '=', ',')).toBe('a=1,b=2');
});

test('test object areEqual true', () => {
    let first = {a:1, b:2};
    let second = {b:2, a:1};
    expect(Objects.areEqual(first, second)).toBe(true);
});

test('test object areEqual false', () => {
    let first = {a:1, b:2};
    let second = {a:2, b:1};
    expect(Objects.areEqual(first, second)).toBe(false);
});

test('test object append value', () => {
    let object = {};
    object = Objects.appendValue(object, 'a', 1);
    object = Objects.appendValue(object, 'b', 2);
    expect(Objects.size(object)).toBe(2);
    expect(object.a).toBe(1);
    expect(object.b).toBe(2);
});
