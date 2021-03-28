console.log('Hello')

const   Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;


const engine = Engine.create();

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 2000,
        height: 1200,
        wireframes: false
    }
});

let playerX = 200;
let playerY = 200;



let mouse = Matter.Mouse.create(render.canvas);

let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse:mouse,
    constraint: {
        render: {visible: false}
    }
});

Matter.Events.on(mouseConstraint, 'mousedown', (event) => {
    console.log('called')
    setGravity();
});

/* Matter.Events.on(mouseConstraint, 'mouseup', () => {
    boxArr.map(box => box.position.x = mouseConstraint.mouse.position.x)
}) */

let gravity = true;



function setGravity() {
    if(gravity) {
        engine.world.gravity.y = -0.5;
        console.log('Negative Gravity Y');
        return gravity = false;
    }
    if(!gravity) {
        engine.world.gravity.y = 0.5;
        console.log('Positive Gravity Y');
        return gravity = true;
    }
}

document.onkeydown = moveElement;

function moveElement(event) {
        switch(event.keyCode) {
            case 39:
                boxArr.map(box => box.position.x++);
                break;
            case 37:
                boxArr.map(box => box.position.x--);
                break;
            default:
                console.log('Keypress does not have any action');
                break;
        }
}
let boxA = Bodies.rectangle(40,200,80,80);


let boxB = Bodies.rectangle(530,200,80,80);


let boxC = Bodies.rectangle(1020,200,80,80);


let boxD = Bodies.rectangle(1510,200,80,80);

let boxF = Bodies.rectangle(1870,200,80,80);

boxArr = [];

boxArr.push(boxA, boxB, boxC, boxD, boxF);

console.log(boxArr);

let circleA = Bodies.circle(250,200,35,35);

let circleB = Bodies.circle(750, 200, 35,35);

let circleC = Bodies.circle(1250, 200, 35,35);

let circleD = Bodies.circle(1750, 200, 35,35)

circleArr = [];

circleArr.push(circleA, circleB, circleC, circleD);



let ground = Bodies.rectangle(0,800,4000,60, {isStatic: true})
let topBar = Bodies.rectangle(0,50,4000,60, {isStatic: true})
let leftBar = Bodies.rectangle(0,50,60,1560, {isStatic: true})
let centerBar = Bodies.rectangle(1000,50,60,1560, {isStatic: true})
let rightBar = Bodies.rectangle(1900,50,60,1560, {isStatic: true})

/* Matter.Events.on(boxA,) */
World.add(engine.world, [boxA, boxB, boxC, boxD, boxF, circleA, circleB, circleC, circleD, ground, topBar,leftBar,centerBar,rightBar, mouseConstraint]);


Engine.run(engine);
Render.run(render);
