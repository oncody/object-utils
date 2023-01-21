import {Arrays} from "../src/object/arrays.js";

test('test array max', () => {
    expect(Arrays.max([1,5,3])).toBe(5);
});

test('test array clone', () => {
    let first = [1,2,3];
    let second = Arrays.clone(first);
    second.push(4);
    expect(first.length).toBe(3);
    expect(second.length).toBe(4);
});