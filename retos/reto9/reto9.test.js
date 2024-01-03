const adjustLights = require('./reto9');

test('',() => {
 const cambios = adjustLights(['🟢', '🔴', '🔴', '🟢', '🔴']);
 expect(cambios).toEqual(1);// -> 1 (cambias la cuarta luz a 🔴)
});



adjustLights(['🟢', '🔴', '🔴', '🟢', '🔴'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// -> 1 (cambia la primera luz a verde)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)