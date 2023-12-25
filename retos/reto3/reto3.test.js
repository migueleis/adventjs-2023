const findNaughtyStep = require("./reto3")

test('WHEN modified is bigger THEN extra word should be in modified', () => {
    const original = 'abcd'
    const modified = 'abcde'
    const word = findNaughtyStep(original, modified)
    expect(word).toEqual('e');
});

test('WHEN original is bigger THEN extra word should be in original', () => {
    const original = 'stepfor'
    const modified = 'stepor'
    const word = findNaughtyStep(original, modified)
    expect(word).toEqual('f');
});

test('WHEN both are equal THEN there is no extra word', () => {
    const original = 'abcde'
    const modified = 'abcde'
    const word = findNaughtyStep(original, modified)
    expect(word).toEqual('');
})

test('WHEN modified is bigger THEN extra word should be in modified', () => {
    const original = 'xxxx';
    const modified = 'xxoxx';
    const word = findNaughtyStep(original, modified)
    expect(word).toEqual('o');
});