function animate() {
    ctx1.clearRect(0,0, canvas.width, canvas.height);
    ctx2.clearRect(0,0, canvas.width, canvas.height);
    ctx3.clearRect(0,0, canvas.width, canvas.height);
    ctx4.clearRect(0,0, canvas.width, canvas.height);
    ctx5.drawImage(background,0,0,canvas.width, canvas.height);
    
    handleScoreBoard();
    handleObstacles();
    character.draw();
    character.update();
    handleParticles();
    handleRipples();
    
    
    
    
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
    };
    
});

window.addEventListener('keydown', (event) => {
    const synth = new Tone.Synth().toDestination();

    
    try{
        if (event.key == 'ArrowLeft') {
            synth.triggerAttackRelease(nodesArr[3][0] , nodesArr[3][1]);
        }

        if (event.key == 'ArrowRight') {
            synth.triggerAttackRelease(nodesArr[2][0], nodesArr[2][1]);
        }
        
        if (event.key == 'ArrowUp') {
            synth.triggerAttackRelease(nodesArr[0][0], nodesArr[0][1]);
        }
        
        if (event.key == 'ArrowDown') {
            synth.triggerAttackRelease(nodesArr[1][0], nodesArr[1][1]);
        }
    }catch(ReferenceError) {
        console.log('Sound couldnt play due to missing values in sound config');
    }
    

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

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let nodesArr = []

const submitBottun = document.getElementById("submitButton");
submitBottun.addEventListener('click', () => {
    nodesArr = nodesToArray();
})


function nodesToArray() {
        let soundUp = document.getElementById("soundUp").value.split(" ");
        let soundDown = document.getElementById("soundDown").value.split(" ");
        let soundLeft = document.getElementById("soundLeft").value.split(" ");
        let soundRight = document.getElementById("soundRight").value.split(" ");
        
        nodesArr.push(soundUp, soundDown, soundRight, soundLeft);
    
    console.log(nodesArr)

    return nodesArr;
}



function handleScoreBoard() {
    ctx4.fillStyle = 'black';
    ctx4.font= '15px Verdana';
    ctx4.strokeText('Level', 265,15);
    ctx4.font = '60px Verdana';
    ctx4.fillText(score + 1, 270, 65);
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Collisions: ' + collisionCount, 10,175)
    ctx4.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 10,195);
}

//Character is first and obstacles on road is second
function collistion(first, second) {
    return  !(  first.x > second.x + second.width ||
                first.x + first.width < second.x ||
                first.y > second.y + second.height ||
                first.y + first.height < second.y);
}

function playDeathSound() {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease('A1', '8n');
    synth.triggerAttackRelease('C3', '8n');
    synth.triggerAttackRelease('F2', '8n')
}

function resetGame() {
    playDeathSound();
    character.x = canvas.width/2 - character.width/2;
    character.y = canvas.height - character.height - 40;
    score = 0;
    collisionCount++;
    gameSpeed = 1; 
}