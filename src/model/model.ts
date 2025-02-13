import { getRandomColor } from "../utils";
import { Entity } from "./entity";
import { Level } from "./level";
import { Vector2 } from "./types";

const ENEMY_NUMBER = 5;
const ENEMY_OFFSET_X = 100;
const ENEMY_OFFSET_Y = 100;
const ENEMY_GAP = 50;
const COLUMNS = 15;
const PLAYER_SPEED = 3;
const BUNNY_WIDTH = 26;
const BUNNY_HEIGHT = 37;

enum GAME_STATE { PAUSE, PLAY, DEAD, WON}

export class Model {
    private _state: GAME_STATE;
    private _player: Entity;
    private _enemies: Entity[];
    private _level: Level;
    private _playerPosition: Vector2 = [0,0];

    get player()    { return this._player }
    get enemies()   { return this._enemies }
    get level()     { return this._level }

    constructor() { // width , height ...
        this._state = GAME_STATE.PLAY;
        this._player = new Entity(500, 500, BUNNY_WIDTH, BUNNY_HEIGHT);
        this._enemies = [];
        this._level = new Level;//width,height ...
        this.InitEnemies();
    }

    private InitEnemies() {
        for (let i = 0; i < ENEMY_NUMBER; i++) {
            const x = ENEMY_OFFSET_X + (i % COLUMNS) * ENEMY_GAP;
            const y = ENEMY_OFFSET_Y + Math.floor(i / COLUMNS) * ENEMY_GAP;
            const enemy = new Entity(x, y, BUNNY_WIDTH, BUNNY_HEIGHT);
            enemy.tint = getRandomColor().toNumber();
            this._enemies.push(enemy);
        }
    }

    SlowUpdate(deltaTime: number) {
        this._enemies.map((enemy, i) => {
            // enemy.tint = getRandomColor().toNumber();
        })
    }

    Update(deltaTime: number, [x, y]: Vector2) {
        if (this._state !== GAME_STATE.PLAY) return;
        this._player.x += x * PLAYER_SPEED * deltaTime;
        this._player.y += y * PLAYER_SPEED * deltaTime;
        this.CheckCollidingWalls();
        this.CheckCollidingEnemies();
        this._playerPosition = [this._player.x, this._player.y];
        this._enemies.map((enemy, i) => {
            const direction = Math.random() > 0.5 ? 1 : -1;
            const even = i % 2 ? 1 : -2;
            // enemy.positionX += deltaTime * direction;
            // enemy.positionY += deltaTime * direction;
            // enemy.rotation += deltaTime * even * 0.1;
        })
    }

    private CheckCollidingWalls() {
        if (this.level.walls.some(wall => this._player.IsColliding(wall))) {
            this._player.x = this._playerPosition[0];
            this._player.y = this._playerPosition[1];
        }
    }

    private CheckCollidingEnemies() {
        if (this._enemies.some(enemy => this._player.IsColliding(enemy))) {
            this._state = GAME_STATE.DEAD;
            alert("Died");
        }
    }
}