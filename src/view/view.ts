import "./styles.css"
import { Application, Sprite, Texture } from "pixi.js";
import { Entity } from "../model/entity";
import { Model } from "../model/model";

type TextureParam = {
    background: Texture,
    bunny: Texture,
}

export class View {
    private _app: Application;
    private _textures: TextureParam;
    private _sprites: Record<number, Sprite> = {}

    constructor(app: Application, tex: TextureParam) {
        this._app = app;
        this._textures = {
            background: tex.background,
            bunny: tex.bunny,
        };
    }

    async Init() {
        await this._app.init({ background: 'black', resizeTo: window,  });
        document.body.appendChild(this._app.canvas);
        this.SetupBackground();
    }

    private SetupBackground() {
        const background = new Sprite(this._textures.background);
        background.zIndex = -10;
        this._app.stage.addChild(background);
    }

    InitSprites(entity: Entity) {
        const entitySprite = new Sprite(this._textures.bunny);
        this._app.stage.addChild(entitySprite);
        // entitySprite.anchor.set(0.5);
        entitySprite.x = entity.x;
        entitySprite.y = entity.y;
        entitySprite.tint = entity.tint;
        this._sprites[entity.id] = entitySprite;
    }

    InitWalls(model: Model) {
        model.level.walls.map(wall => {
            const sprite = new Sprite(Texture.WHITE);
            sprite.x = wall.x
            sprite.y = wall.y;
            sprite.width = wall.width;
            sprite.height = wall.height;
            sprite.tint = wall.tint;
            this._app.stage.addChild(sprite);
        });
    }

    Update(deltaTime: number, model: Model) {
        const playerSprite = this._sprites[model.player.id];
        playerSprite.x = model.player.x;
        playerSprite.y = model.player.y;
        playerSprite.tint = model.player.tint;
        model.enemies.map(enemy => {
            const enemySprite = this._sprites[enemy.id]
            enemySprite.x = enemy.x;
            enemySprite.y = enemy.y;
            enemySprite.rotation = enemy.rotation;
            enemySprite.tint = enemy.tint;
        })
    }
}