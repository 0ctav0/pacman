export class Entity {
    private _positionX: number;
    private _positionY: number;

    get positionX() {return this._positionX}
    get positionY() {return this._positionY}

    constructor(positionX: number, positionY: number) {
        this._positionX = positionX;
        this._positionY = positionY;
    }
}