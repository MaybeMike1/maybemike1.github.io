const canvas = document.getElementById("canvas1");
const ctx1 = canvas.getContext("2d")
canvas.height= 600;
canvas.width = 600;


const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas.getContext("2d")
canvas.height= 600;
canvas.width = 600;



const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas.getContext("2d")
canvas.height= 600;
canvas.width = 600;



const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas.getContext("2d")
canvas.height= 600;
canvas.width = 600;


const canvas5 = document.getElementById("canvas5");
const ctx5 = canvas.getContext("2d")
canvas.height= 600;
canvas.width = 600;




//Global variables
const grid = 80;
let keys = [];
let score = 0;
let collisionCount = 0;
let frame = 0;
let gameSpeed = 1;

const particlesArray = [];
const maxParticles = 300;
const ripplesArray = [];
const enemiesArray = [];
const logsArray = [];


const background = new Image();
background.src = 'background_lvl2.png';

/* const character = new Image();
character.src = "248250.png" */

const grass = new Image();
grass.src = 'grass.png';

const collistions = new Image();
collistions.src = 'hit.png'

const turtle = new Image();
turtle.src = 'turtles.png'

const enemies = new Image();
enemies.src = 'enemy.png';

const log = new Image();
log.src = 'log.png';

let numberOfCars = 1;


/* let playerX = canvas.width / 2;
const playerY = canvas.height / 5;

console.log(playerX)

/* function drawBackground() {
    ctx.beginPath();
    ctx.rect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
}


function drawWorld() {
    
}

function drawPlayer() {
    
}

drawBackground();
 */