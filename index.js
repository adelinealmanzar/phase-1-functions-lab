function distanceFromHqInBlocks(value) {
    return Math.abs(42 - value);
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value)*264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const dist = distanceTravelledInFeet(start, destination);
    if (dist <= 400) {
        return 0;
    } else if (dist > 400 && dist < 2000) {
        return (dist - 400) * (2/100);
    } else if (dist > 2000 && dist < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}