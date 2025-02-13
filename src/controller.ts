import { Application, Ticker } from "pixi.js";
import { Model } from "./model/model";
import { View } from "./view/view";
import { LoadResources } from "./resources";
import { Vector2 } from "./model/types";

const SLOW_UPDATE_DELAY_MS = 100;

const PLAYER_CONTROL_UP = "ArrowUp";
const PLAYER_CONTROL_RIGHT = "ArrowRight";
const PLAYER_CONTROL_DOWN = "ArrowDown";
const PLAYER_CONTROL_LEFT = "ArrowLeft";

export class Controller {
    private app: Application;
    private model: Model;
    private view?: View;
    private _slowDelta: number = 0;
    private _direction: Vector2 = [0, 0];

    constructor() {
        this.app = new Application();
        this.model = new Model();
        this.Init();
    }

    private async Init() {
        await this.LoadResources();
        await this.LoadLevel();
        await this.LoadEntities();
        this.SlowUpdateLoop();
        this.app.ticker.add(this.UpdateLoop);
        this.SetupPlayerController();
    }

    private async LoadResources() {
        const [background, bunny] = await LoadResources();
        this.view = new View(this.app, { background, bunny });
        await this.view.Init();
    }

    private async LoadLevel() {

    }

    private async LoadEntities() {
        this.view?.InitSprites(this.model.player);
        this.model.enemies.map(enemy => this.view?.InitSprites(enemy));
    }

    private SetupPlayerController = () => {
        addEventListener("keydown", (e) => {
            console.log(e);
            switch (e.key) {
                case PLAYER_CONTROL_UP:
                    this._direction = [0, -1];
                    break;
                case PLAYER_CONTROL_RIGHT:
                    this._direction = [1, 0];
                    break;
                case PLAYER_CONTROL_DOWN:
                    this._direction = [0, 1];
                    break;
                case PLAYER_CONTROL_LEFT:
                    this._direction = [-1, 0];
                    break;
            }
        });
    }

    private SlowUpdateLoop = () => {
        const deltaTimeS = (performance.now() - this._slowDelta) / 1000;
        this.model.SlowUpdate(deltaTimeS);
        this._slowDelta = performance.now();
        setTimeout(this.SlowUpdateLoop, SLOW_UPDATE_DELAY_MS);
    }

    private UpdateLoop = (time: Ticker) => {
        this.model.Update(time.deltaTime, this._direction);
        this.view?.Update(time.deltaTime, this.model);
    }
}