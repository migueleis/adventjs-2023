function findFirstRepeated(gifts) {
    const repeatedValues = gifts.filter((value, index, array) => array.indexOf(value) !== index)
    return repeatedValues.length > 0 ? repeatedValues[0] : -1;
}

module.exports = findFirstRepeated;