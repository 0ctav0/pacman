import { HEIGHT, WIDTH } from "../controller";
import { Entity } from "./entity";

const WALL_THICKNESS = 20;

export class Level {
    private _walls: Entity[] = [];

    get walls() { return this._walls}

    constructor() { // width, heigt ...
        this.InitWalls();
    }

    private InitWalls() {
        const topWall = new Entity(0, 0, WIDTH, WALL_THICKNESS); // width, heigt
        this._walls.push(topWall);

        const leftWall = new Entity(0,0, WALL_THICKNESS, HEIGHT);
        this._walls.push(leftWall);

        const rightWall = new Entity(WIDTH-WALL_THICKNESS, 0, WALL_THICKNESS, HEIGHT);
        this._walls.push(rightWall);

        const bottomWall = new Entity(0, HEIGHT-WALL_THICKNESS, WIDTH, WALL_THICKNESS);
        this._walls.push(bottomWall);
    }
}