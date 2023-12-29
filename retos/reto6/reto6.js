function maxDistance(movements) {
    const arr = movements.split('');
    const left = arr.filter(c => c === '>').length;
    const right = arr.filter(c => c === '<').length;
    const stars = arr.filter(c => c === '*').length;
    if (left > right) {
        return left + stars - right;
    } else {
        return right + stars - left;
    }
}

module.exports = maxDistance;