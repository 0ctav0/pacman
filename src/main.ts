import { Game } from './game';

const game = new Game();

// const player = new Sprite(bunnyTexture);
// app.stage.addChild(player);
// player.anchor.set(0.5);
// player.x = app.screen.width / 2 - 200;
// player.y = app.screen.height / 2;


// const background = new Sprite(backgroundTex);
// background.zIndex = -10;
// background.on("mousedown", (e) => {
//   console.log(e.clientX, e.clientY);
//   player.x = e.clientX;
//   player.y = e.clientY;
// })
// background.eventMode = "static"
// app.stage.addChild(background);

// // Load the bunny texture

// const bunnies: Sprite[] = [];

// const columns = 5;

// // Create a 5x5 grid of bunnies in the container
// for (let i = 0; i < 25; i++) {
//   const bunny = new Sprite(bunnyTexture);
//   // bunny.
//   // bunny.
// // bunny.localColor = new Color({r: Math.random()*255, g: Math.random() * 255, b: Math.random() *255}).toNumber();
//   bunny.x = (i % columns) * 40;
//   bunny.y = Math.floor(i / columns) * 40;
  
//   // bunny.rotation += 0.1*i;
//   bunnies.push(bunny);
//   // bunny.localColor = 0xfFFFFF * Math.random() //Math.random()*10000000000;
//   container.addChild(bunny);
// }

// // Move the container to the center
// container.x = app.screen.width / 2;
// container.y = app.screen.height / 2;

// // Center the bunny sprites in local container coordinates
// container.pivot.x = container.width / 2;
// container.pivot.y = container.height / 2;


// let elapsed = 0;

// const colorChanging = () => {
//   console.log(
//     "color"
//   )
//   bunnies.map((bunny) => {
//     bunny.tint = getRandomColor().toNumber()
//   }
//     );
//     setTimeout(() => colorChanging(), 50);
//   }

// colorChanging();


// // Listen for animate update
// app.ticker.add((time) => {
//   // Continuously rotate the container!
//   // * use delta to create frame-independent transform *
//   app.renderer.clear();
//   elapsed += time.deltaTime;
//   // container.rotation += 0.01 * time.deltaTime;

//   const speed = 0.1;
//   bunnies.map((bunny, i) => {
//   const direction =  i % 2 ? 1 : -2;
//   bunny.rotation += speed * time.deltaTime * direction;
//  });