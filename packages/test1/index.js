import * as PIXI from 'pixi.js';
// import * as Chaine from './chained.js';
import { Chained } from './chained.js';
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
// const app = new PIXI.Application({
//   width: 800, height: 600, backgroundColor: 0x1099bb, 
//   resolution: window.devicePixelRatio || 1,
// });
// document.body.appendChild(app.view);
// const container = new PIXI.Container();
// app.stage.addChild(container);
// // Create a new texture
// const texture = PIXI.Texture.from('/sample.png');
// // Create a 5x5 grid of bunnies
// for (let i = 0; i < 25; i++) {
//   const bunny = new PIXI.Sprite(texture);
//   bunny.anchor.set(0.5);
//   bunny.x = (i % 5) * 40;
//   bunny.y = Math.floor(i / 5) * 40;
//   container.addChild(bunny);
// }
// // Move container to the center
// container.x = app.screen.width / 2;
// container.y = app.screen.height / 2;
// // Center bunny sprite in local container coordinates
// container.pivot.x = container.width / 2;
// container.pivot.y = container.height / 2;

///////
const app = new PIXI.Application({
	width: 800,
	height: 800,
	backgroundColor: 0x1099bb,
	antialias: true
});
document.body.appendChild(app.view);

//line
const line = new PIXI.Graphics();
line.lineStyle(8, 0xFFFFFF);
line.moveTo(120, 30);  
line.lineTo(50, 50);
line.x = 500;
line.y = 500;

const lineA = new PIXI.Graphics();
lineA.lineStyle(8, 0xFFFFFF);
lineA.moveTo(120, 30);  
lineA.lineTo(50, 50);
lineA.x = 450;
lineA.y = 450;

app.stage.addChild(line,lineA);

//circle
const circle = new PIXI.Graphics();
circle.beginFill(0x9966FF);
circle.drawCircle(0, 0, 82);
circle.endFill();
circle.x = 344;
circle.y = 430;
app.stage.addChild(circle);

//rect
// const rect = new PIXI.Graphics();
// rect.beginFill(0x98860F);
// rect.drawRect(0,0,80,80);
// rect.endFill();
// rect.x = 80;
// rect.y = 80;
// app.stage.addChild(rect);

//chained
const RectGraphicsA = new PIXI.Graphics();
const RectContextA = {
  x:0,
  y:0,
  width:80,
  height:80,
  color:0x98860F
}
app.stage.addChild(Chained.render(RectGraphicsA, RectContextA));
RectGraphicsA.x = 80;
RectGraphicsA.y = 80;


const RectGraphicsB = new PIXI.Graphics();
const RectContextB = {
  x:0,
  y:0,
  width:80,
  height:80,
  color:0x98860F
}
app.stage.addChild(Chained.render(RectGraphicsB, RectContextB));
RectGraphicsB.x = 230;
RectGraphicsB.y = 380;