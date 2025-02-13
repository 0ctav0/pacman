import { Color } from "pixi.js";

export const getRandomChannel = () => 255 * Math.random();
export const getRandomColor = () => new Color({r: getRandomChannel(), g: getRandomChannel(), b: getRandomChannel()})
export const generateId = () => Math.random().toString().slice(2);