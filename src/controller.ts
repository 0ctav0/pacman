import { Application } from "pixi.js";
import { Model } from "./model/model";
import { View } from "./view/view";
import { LoadResources } from "./resources";

export class Controller {
    private app: Application;
    private model: Model;
    private view?: View;

    constructor() {
        this.app = new Application();
        this.model = new Model();
        this.Load();
    }
    
    private async Load() {
        await this.LoadResources();
        await this.LoadLevel();
        await this.LoadEntities();
    }
    
    private async LoadResources() {
        const [background, bunny] = await LoadResources();
        this.view = new View(this.app, {background, bunny});
    }

    private async LoadLevel() {

    }

    private async LoadEntities() {
        this.view?.DrawEntity(this.model.player);
        this.model.enemies.map(enemy => this.view?.DrawEntity(enemy));
    }
}