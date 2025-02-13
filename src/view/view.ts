import "./styles.css"
import { Application, Container, Sprite, Texture } from "pixi.js";
import { Entity } from "../model/entity";

type TextureParam = {
    background: Texture,
    bunny: Texture,
}

export class View {
    private app: Application;
    private textures: TextureParam;
    private playerSprite: Sprite|null = null;

    constructor(app: Application, tex: TextureParam) {
        this.app = app;
        this.textures = {
            background: tex.background,
            bunny: tex.bunny,
        };
        this.Init();
    }
    private async Init() {
        await this.app.init({ background: '#1099bb', resizeTo: window });
        document.body.appendChild(this.app.canvas);
        const container = new Container();
        this.app.stage.addChild(container);
    
        this.SetupBackground();
    }
    private SetupBackground() {
        const background = new Sprite(this.textures.background);
        background.zIndex = -10;
        background.eventMode = "static"
        this.app.stage.addChild(background);
    }

    DrawEntity(entity: Entity) {
        this.playerSprite = new Sprite(this.textures.bunny);
        this.app.stage.addChild(this.playerSprite);
        this.playerSprite.anchor.set(0.5);
        this.playerSprite.x = entity.positionX;
        this.playerSprite.y = entity.positionY;
    }
}