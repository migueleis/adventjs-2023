function decode(message) {
    function invertir(message) {
        return message.split('').reverse().join('');
    }
    const regex = /\(([^()]+)\)/;
    while (message.includes('(')) {
        const match = message.match(regex);
        message = message.replace(match[0], invertir(match[1]));
    }
    return message;
}
module.exports = decode;