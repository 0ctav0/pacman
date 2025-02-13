import { Assets } from "pixi.js";

export function LoadResources() {
  return Promise.all([
      Assets.load('/space2.webp'),
    Assets.load('/bunny.png'), 
])};