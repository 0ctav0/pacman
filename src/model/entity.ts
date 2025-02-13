import { generateUID } from "pixi.js";

export class Entity {
    private _id: number;
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private _rotation: number;
    private _tint: number;

    get id()            {return this._id}
    get x()             {return this._x}
    get y()             {return this._y}
    get width()         {return this._width}
    get height()        {return this._height}
    get rotation()      {return this._rotation}
    get tint()          {return this._tint}

    set x(v)            {this._x = v}
    set y(v)            {this._y = v}
    set width(v)        {this._width = v}
    set height(v)       {this._height = v}
    set rotation(v)     {this._rotation =v}
    set tint(v)         {this._tint = v}

    constructor(x: number, y: number, width: number, height: number) {
        this._id = generateUID();
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._rotation = 0;
        this._tint = 0xFF_FF_FF;
    }

    IsColliding(o: Entity): boolean {
        return this.x < o.x + o.width
        && this.x + this.width > o.x
        && this.y < o.y + o.height
        && this.y + this.height > o.y;
    }
}