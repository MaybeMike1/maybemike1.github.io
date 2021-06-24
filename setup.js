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




//Global Variables for game rules and variable counts
const grid = 80;
let keys = [];
let score = 0;
let collisionCount = 0;
let frame = 0;
let gameSpeed = 1;
let isSafe = false;

const particlesArray = [];
const maxParticles = 300;
const ripplesArray = [];
const enemiesArray = [];
const logsArray = [];


const background = new Image();
background.src = 'assets/background_2.png';

const characterSprite = new Image();
characterSprite.src = "assets/character.png";

const grass = new Image();
grass.src = 'assets/grass.png';


const turtle = new Image();
turtle.src = 'assets/turtles.png'

const enemies = new Image();
enemies.src = 'assets/enemy.png';

const log = new Image();
log.src = 'assets/log.png';


let numberOfEnemies = 1;