const manufacture = require("./reto2")


test('WHEN characters are in gifts THEN return gifts', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const materials = 'tronesa'
    const availables = manufacture(gifts, materials);
    expect(availables).toEqual(["tren", "oso"]);
});

test('WHEN characters not complete any gift THEN return empty', () => {
    const gifts = ['libro', 'ps5'];
    const materials = 'psli';
    const availables = manufacture(gifts, materials);
    expect(availables).toEqual([]);
});