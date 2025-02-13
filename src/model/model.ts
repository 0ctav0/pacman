import { getRandomColor } from "../utils";
import { Entity } from "./entity";
import { Vector2 } from "./types";

const ENEMY_NUMBER = 5;
const ENEMY_OFFSET_X = 100;
const ENEMY_OFFSET_Y = 100;
const ENEMY_GAP = 50;
const COLUMNS = 15;
const PLAYER_SPEED = 3;

export class Model {
    player: Entity;
    enemies: Entity[];

    constructor() {
        this.player = new Entity(500, 500);
        this.enemies = [];
        this.InitEnemies();
    }

    private InitEnemies() {
        for (let i = 0; i < ENEMY_NUMBER; i++) {
            const x = ENEMY_OFFSET_X + (i % COLUMNS) * ENEMY_GAP;
            const y = ENEMY_OFFSET_Y + Math.floor(i / COLUMNS) * ENEMY_GAP;
            const enemy = new Entity(x, y);
            enemy.tint = getRandomColor().toNumber();
            this.enemies.push(enemy);
        }
    }

    SlowUpdate(deltaTime: number) {
        this.enemies.map((enemy, i) => {
            // enemy.tint = getRandomColor().toNumber();
        })
    }

    Update(deltaTime: number, [x, y]: Vector2) {
        this.player.positionX += x * PLAYER_SPEED * deltaTime;
        this.player.positionY += y * PLAYER_SPEED * deltaTime;
        this.enemies.map((enemy, i) => {
            const direction = Math.random() > 0.5 ? 1 : -1;
            const even = i % 2 ? 1 : -2;
            // enemy.positionX += deltaTime * direction;
            // enemy.positionY += deltaTime * direction;
            // enemy.rotation += deltaTime * even * 0.1;
        })
    }
}