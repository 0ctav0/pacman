import { Entity } from "./entity";

const ENEMY_NUMBER = 20;
const ENEMY_OFFSET_X = 100;
const ENEMY_OFFSET_Y = 100;
const ENEMY_GAP = 50;
const COLUMNS = 5;

export class Model {
    player: Entity;
    enemies: Entity[];

    constructor() {
        this.player = new Entity(100, 100);
        this.enemies = [];
        this.InitEnemies();
    }

    private InitEnemies() {
        for (let i = 0; i < ENEMY_NUMBER; i++) {
            const x = ENEMY_OFFSET_X + (i % COLUMNS) * ENEMY_GAP;
            const y = ENEMY_OFFSET_Y + Math.floor(i / COLUMNS) * ENEMY_GAP;
            this.enemies.push(new Entity(x,y));
        }
    }
}