const createChristmasTree = require('./reto10');

const singleCharacter = "  x\n x x\nx x x\n  |\n";

const multiCharacter = "  a\n b c\na b c\n  |\n";
test('single character', () => {
    const draw = createChristmasTree("x", 3);
    expect(draw).toEqual(singleCharacter)
})

test('multiple characters', () => {
    const draw = createChristmasTree("abc", 3);
    expect(draw).toEqual(multiCharacter)
})