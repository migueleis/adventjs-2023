function cyberReindeer(road, time) {
    const nextStep = (pos, road, lastRoad) => {
        if (road[pos] !== '|') {
            let copyRoad = [...lastRoad];
            copyRoad[pos] = 'S';
            if (pos === 1) {
                copyRoad[pos - 1] = '.';
            } else {
                copyRoad[pos - 1] = road[pos - 1];
            }
            return [pos + 1, copyRoad.join('')];
        }
        return [pos, lastRoad];
    };

    const exit = [road];
    let pos = 1;
    for (let i = 1; i < time; i++) {
        let nextPos, step, lastRoad = exit[i - 1];
        if (i === 5) {
            road = road.replaceAll('|', '*');
            lastRoad = lastRoad.replaceAll('|', '*');
        }
        [nextPos, step] = nextStep(pos, road, lastRoad);
        pos = nextPos;
        exit.push(step);
    }
    return exit;
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log(cyberReindeer(road, time));

module.exports = cyberReindeer;