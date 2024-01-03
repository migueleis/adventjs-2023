function adjustLights(lights) {
  let changesRed = 0;
  let changesGreen = 0;

  for (let i = 0; i < lights.length; i++) {
    if (i % 2 === 0) {
      if (lights[i] !== '🔴') {
        changesRed++
      } else {
        changesGreen++
      }
    } else {
      if (lights[i] !== '🟢') {
        changesRed++
      } else {
        changesGreen++
      }
    }
  }

  return Math.min(changesRed, changesGreen);
}

module.exports = adjustLights;