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

export const WIDTH = 1024;
export const HEIGHT = 1024;

export class Controller {
    private _app: Application;
    private _model: Model;
    private _view?: View;
    private _slowDelta: number = 0;
    private _direction: Vector2 = [0, 0];

    constructor() {
        this._app = new Application();
        this._model = new Model();
        this.Init();
    }

    private async Init() {
        await this.LoadResources();
        await this.LoadLevel();
        await this.LoadEntities();
        this.SlowUpdateLoop();
        this._app.ticker.add(this.UpdateLoop);
        this.SetupPlayerController();
    }

    private async LoadResources() {
        const [background, bunny] = await LoadResources();
        this._view = new View(this._app, { background, bunny });
        await this._view.Init();
    }

    private async LoadLevel() {
        this._view?.InitWalls(this._model);
    }

    private async LoadEntities() {
        this._view?.InitSprites(this._model.player);
        this._model.enemies.map(enemy => this._view?.InitSprites(enemy));
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
        this._model.SlowUpdate(deltaTimeS);
        this._slowDelta = performance.now();
        setTimeout(this.SlowUpdateLoop, SLOW_UPDATE_DELAY_MS);
    }

    private UpdateLoop = (time: Ticker) => {
        this._model.Update(time.deltaTime, this._direction);
        this._view?.Update(time.deltaTime, this._model);
    }
}