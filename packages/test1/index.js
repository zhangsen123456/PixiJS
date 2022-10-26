import * as PIXI from 'pixi.js';
//  // Create the application helper and add its render target to the page
//  let app = new PIXI.Application({ width: 640, height: 360 });
//  document.body.appendChild(app.view);
//  // Create the sprite and add it to the stage
//  let sprite = PIXI.Sprite.from('/sample.png');
//  app.stage.addChild(sprite);
//  // Add a ticker callback to move the sprite back and forth
//  let elapsed = 0.0;
//  app.ticker.add((delta) => {
//    elapsed += delta;
//    sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
//  });
const app = new PIXI.Application({
  width: 800, height: 600, backgroundColor: 0x1099bb, 
  resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);
const container = new PIXI.Container();
app.stage.addChild(container);
// Create a new texture
const texture = PIXI.Texture.from('/sample.png');
// Create a 5x5 grid of bunnies
for (let i = 0; i < 25; i++) {
  const bunny = new PIXI.Sprite(texture);
  bunny.anchor.set(0.5);
  bunny.x = (i % 5) * 40;
  bunny.y = Math.floor(i / 5) * 40;
  container.addChild(bunny);
}
// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;
// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;
// Listen for animate update
app.ticker.add((delta) => {
  // rotate the container!
  // use delta to create frame-independent transform
  container.rotation -= 0.01 * delta;
});