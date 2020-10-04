import $ from './query';

let points: number = 0;

export function addPoints(n: number) {
    points += n;
    if (points < 0) {
        points = 0;
    }
    $("app__points").innerText = points + ' 🟊';
}

export function getPoints(): number {
    return points;
}