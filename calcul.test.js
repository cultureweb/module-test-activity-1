const {sum, mult, div, sub, date2000} = require('./calcul');

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

describe('date2000', () => {
    let originalDateNow = Date.now;

    beforeEach(() => {
        Date.now = () => new Date("2000-01-01T00:10:00").getTime()
        });
   
    afterEach(() => {
        Date.now = originalDateNow;
    });

    test('date2000', () => {
        expect(date2000()).toBe(600);
    });
});