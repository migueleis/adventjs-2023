/*function manufacture(gifts, materials) {
    const res = [];
    gifts.forEach((gift) => {
        let included = true;
        for (const c of gift) {
            if (!materials.includes(c)) {
                included = false;
            }
        }
        if (included) {
            res.push(gift);
        }
    })
    return res;
}*/

function manufacture(gifts, materials) {
    return gifts.filter(gift => gift.split('').every(char => materials.includes(char)))
}

module.exports = manufacture;