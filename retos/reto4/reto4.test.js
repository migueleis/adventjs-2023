const decode = require('./reto4');

test('Decode single parenthesis', () => {
    const message = decode('hola (odnum)');
    expect(message).toEqual('hola mundo');
})

test('Decode several parenthesis', () => {
    const message = decode('(olleh) (dlrow)!');
    expect(message).toEqual('hello world!');
})

test('Decode nested parenthesis', () => {
    const message = decode('sa(u(cla)atn)s');
    expect(message).toEqual('santaclaus');
})