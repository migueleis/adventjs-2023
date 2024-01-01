const organizeGifts = require('./reto8');

test('', () => {
    const result = organizeGifts(`76a11b`)
    expect(result).toEqual('[a]{a}{a}(aaaaaa){b}(b)');
})