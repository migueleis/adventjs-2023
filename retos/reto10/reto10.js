function createChristmasTree(ornaments, height) {
    let draw = '';
    let ornament = 0;
    const ornamentSize = ornaments.length;
    for (let i = 0; i < height; i++) {
        draw += ' '.repeat(height - 1 - i);
        for (let orn = 0; orn < i + 1; orn++) {
            draw += ornaments.charAt(ornament % ornamentSize);
            if (orn + 1 < i + 1) {
                draw += ' '
            }
            ornament++;
        }
        draw += '\n';
    }
    draw += ' '.repeat(height - 1);
    draw += '|';
    draw += '\n';
    return draw;
}

module.exports = createChristmasTree;