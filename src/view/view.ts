import "./styles.css"
import { Application, Sprite, Texture } from "pixi.js";
import { Entity } from "../model/entity";
import { Model } from "../model/model";

type TextureParam = {
    background: Texture,
    bunny: Texture,
}

export class View {
    private app: Application;
    private textures: TextureParam;
    private sprites: Record<number, Sprite> = {}

    constructor(app: Application, tex: TextureParam) {
        this.app = app;
        this.textures = {
            background: tex.background,
            bunny: tex.bunny,
        };
    }

    async Init() {
        await this.app.init({ background: '#1099bb', resizeTo: window });
        document.body.appendChild(this.app.canvas);
        this.SetupBackground();
    }

    private SetupBackground() {
        const background = new Sprite(this.textures.background);
        background.zIndex = -10;
        background.eventMode = "static"
        this.app.stage.addChild(background);
    }

    InitSprites(entity: Entity) {
        const entitySprite = new Sprite(this.textures.bunny);
        this.app.stage.addChild(entitySprite);
        entitySprite.anchor.set(0.5);
        entitySprite.x = entity.positionX;
        entitySprite.y = entity.positionY;
        entitySprite.tint = entity.tint;
        this.sprites[entity.id] = entitySprite;
    }

    Update(deltaTime: number, model: Model) {
        const playerSprite = this.sprites[model.player.id];
        playerSprite.x = model.player.positionX;
        playerSprite.y = model.player.positionY;
        playerSprite.tint = model.player.tint;
        model.enemies.map(enemy => {
            const enemySprite = this.sprites[enemy.id]
            enemySprite.x = enemy.positionX;
            enemySprite.y = enemy.positionY;
            enemySprite.rotation = enemy.rotation;
            enemySprite.tint = enemy.tint;
        })
    }
}