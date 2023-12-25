function findNaughtyStep(original, modified) {
  let found = '';
  if (original.length !== modified.length) {
    if (original.length > modified.length) {
      for (let i = 0; i < original.length; i++) {
        if (original[i] !== modified[i]) {
          return original[i];

        }
      }
    } else {
      for (let i = 0; i < modified.length; i++) {
        if (modified[i] !== original[i]) {
          return modified[i];
        }
      }
    }
  }
  return found;
}

module.exports = findNaughtyStep;