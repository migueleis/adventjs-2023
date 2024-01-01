/*function organizeGifts(gifts) {
    function generatePackages(number, symbol) {
        const cajas = parseInt(number / 50);
        const pales = parseInt((number % 50) / 10);
        const bolsa = parseInt((number % 50) % 10);
        let exit = `[${symbol}]`.repeat(cajas);
        exit += `{${symbol}}`.repeat(pales);
        if (bolsa > 0) {
            exit += '(' + symbol.repeat(bolsa) + ')';
        }
        return exit;
    }
    let bloques = gifts.match(/\d+[a-z]/g);
    return bloques.map(bloque => {
        return generatePackages(parseInt(bloque.substring(0, bloque.length - 1)), bloque[bloque.length - 1])
    }).join('');
}*/


function organizeGifts(gifts) {
    let bloques = gifts.match(/\d+[a-z]/g);
    let exit = '';
    for (let bloque of bloques) {
        const number = Math.floor(bloque.substring(0, bloque.length - 1));
        const symbol = bloque[bloque.length - 1];
        const cajas = Math.floor(number / 50);
        const pales = Math.floor((number % 50) / 10);
        const bolsa = (number % 50) % 10;
        exit += `[${symbol}]`.repeat(cajas);
        exit += `{${symbol}}`.repeat(pales);
        if (bolsa > 0) {
            exit += '(' + symbol.repeat(bolsa) + ')';
        }
    }
    return exit;
}
 module.exports = organizeGifts;