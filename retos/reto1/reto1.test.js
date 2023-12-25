const findFirstRepeated = require('./reto1');

test('WHERE there is a number repeated THEN get it', () => {
    const giftIds = [2, 1, 3, 5, 2]
    const firstRepeatedId = findFirstRepeated(giftIds)
    expect(firstRepeatedId).toBe(2);
});

test('WHERE there is no number repeated THEN get -1', () => {
    const giftIds2 = [1, 2, 3, 4]
    const firstRepeatedId = findFirstRepeated(giftIds2)
    expect(firstRepeatedId).toBe(-1);
});

test('WHERE there are more than one number repeated THEN get the first one', () => {
    const giftIds = [2, 1, 3, 5, 3, 2]
    const firstRepeatedId = findFirstRepeated(giftIds)
    expect(firstRepeatedId).toBe(3);
});