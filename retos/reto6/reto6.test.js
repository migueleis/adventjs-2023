const maxDistance = require('./reto6');

test('', () => {
    const movements = '>>*<';
    const result = maxDistance(movements);
    expect(result).toEqual(2);
})

test('', () => {
    const movements2 = '<<<>';
    const result = maxDistance(movements2);
    expect(result).toEqual(2);
})

test('', () => {
    const movements3 = '>***>';
    const result = maxDistance(movements3);
    expect(result).toEqual(5);
})