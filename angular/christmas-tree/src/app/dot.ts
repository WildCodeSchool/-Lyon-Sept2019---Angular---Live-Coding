import { randomNumber } from 'src/app/helpers';

export class Dot {
    size: number;
    color: string;
    x: number;
    y: number;
    time: number;

    constructor() {
        this.size = randomNumber(30);
        this.color = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
        this.x = randomNumber(window.innerWidth);
        this.y = randomNumber(window.innerHeight);
    }
}
