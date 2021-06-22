function animate() {
    ctx1.clearRect(0,0, canvas.width, canvas.height);
    ctx2.clearRect(0,0, canvas.width, canvas.height);
    ctx3.clearRect(0,0, canvas.width, canvas.height);
    ctx4.clearRect(0,0, canvas.width, canvas.height);
    ctx5.drawImage(background,0,0,canvas.width, canvas.height);
    
    
    handleObstacles();
    character.draw();
    character.update();
    handleParticles();
    handleRipples();
    
    
    handleScoreBoard();
    
    ctx4.drawImage(grass,0,0,canvas.width, canvas.height);
    frame++;
    requestAnimationFrame(animate);
}

animate();


// Event Listeners
window.addEventListener('keydown', (event) => {
    keys = [];
    keys[event.key] = true;
    if (keys["ArrowLeft"] || keys["ArrowUp"] || keys["ArrowRight"]  || keys["ArrowDown"]) {
        character.move();
        console.log('Sound should come out');
        let synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
       
    };
    
});

window.addEventListener('keyup', (event) => {
    delete keys[event.key];
    character.moving = false;
});

function scored() {
    score++;
    gameSpeed += 0.05;
    character.x = canvas.width/2 - character.width/2;
    character.y = canvas.height - character.height - 40;
}

function handleScoreBoard() {
    ctx4.fillStyle = 'black';
    ctx4.font= '15px Verdana';
    ctx4.strokeText('Level', 265,15);
    ctx4.font = '60px Verdana';
    ctx4.fillText(score + 1, 270, 65);
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Collisions: ' + collisionCount, 10,175)
    ctx4.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 10,195)
}
//Character is first and obstacles on road is second
function collistion(first, second) {
    return  !(  first.x > second.x + second.width ||
                first.x + first.width < second.x ||
                first.y > second.y + second.height ||
                first.y + first.height < second.y);
}

function resetGame() {
    character.x = canvas.width/2 - character.width/2;
    character.y = canvas.height - character.height - 40;
    score = 0;
    collisionCount++;
    gameSpeed = 1; 
}