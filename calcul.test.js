const {sum, mult, div, sub} = require('./calcul');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('mult 2 x 2 to equal 4', () => {
    expect(mult(2, 2)).toBe(4);
});

test('div 10 / 5 to equal 2', () => {
    expect(div(10, 5)).toBe(2);
});

test('sub 3 - 2 to equal 0', () => {
    expect(sub(3, 2)).toBe(1);
});
