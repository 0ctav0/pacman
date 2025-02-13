import { generateUID } from "pixi.js";

export class Entity {
    private _id: number;
    private _positionX: number;
    private _positionY: number;
    private _rotation: number;
    private _tint: number;

    get id()        {return this._id}
    get positionX() {return this._positionX}
    get positionY() {return this._positionY}
    get rotation()  {return this._rotation}
    get tint()      {return this._tint}

    set positionX(v) {this._positionX = v}
    set positionY(v) {this._positionY = v}
    set rotation(v)  {this._rotation =v}
    set tint(v)      {this._tint = v}

    constructor(positionX: number, positionY: number) {
        this._id = generateUID();
        this._positionX = positionX;
        this._positionY = positionY;
        this._rotation = 0;
        this._tint = 0xFF_FF_FF;
    }
}