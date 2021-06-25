function animate() {
    ctx1.clearRect(0,0, canvas.width, canvas.height);
    ctx2.clearRect(0,0, canvas.width, canvas.height);
    ctx3.clearRect(0,0, canvas.width, canvas.height);
    ctx4.clearRect(0,0, canvas.width, canvas.height);
    ctx5.drawImage(background,0,0,canvas.width, canvas.height);

// Character animation happens here 
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
    const oscScore = new Tone.Oscillator().toDestination();
    if (level < 10) {
        oscScore.frequency.value = "C3";
        oscScore.frequency.rampTo("C1", 1);
        oscScore.start().stop("+1");
    }

    if (level >= 10) {
        oscScore.frequency.value = "F3";
        oscScore.frequency.rampTo("F1", 1);
        oscScore.start().stop("+1");
    } 
    
    level++;
    gameSpeed += 0.05;
    character.x = canvas.width/2 - character.width / 2;
    character.y = canvas.height - character.height - 40;
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let nodesArr = []

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener('click', () => {
    nodesArr = nodesToArray();
})


function nodesToArray() {
        let soundUp = document.getElementById("soundUp").value.split(" ");
        let soundDown = document.getElementById("soundDown").value.split(" ");
        let soundLeft = document.getElementById("soundLeft").value.split(" ");
        let soundRight = document.getElementById("soundRight").value.split(" ");
        
        nodesArr.unshift(soundUp, soundDown, soundRight, soundLeft);
    
    console.log(nodesArr)

    return nodesArr;
}



function handleScoreBoard() {
    ctx4.fillStyle = 'black';
    ctx4.font= '20px Verdana';
    ctx4.strokeText('Level:' + level, 525,190);
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Retry Attempts ' + collisionCount, 10,175)
    ctx4.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 10,195);
}

//Character is first and obstacles on road and river are second
function collision(first, second) {
    return  !(  first.x > second.x + second.width ||
                first.x + first.width < second.x ||
                first.y > second.y + second.height ||
                first.y + first.height < second.y);
}

function playDeathSound() {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    if (collisionCount < 10) {
        synth.triggerAttackRelease('F2', '8n', now);
        synth.triggerAttackRelease('D3', '8n', now + 0.5);
        synth.triggerAttackRelease('E2', '8n', now + 1);
        synth.triggerAttackRelease('C4', '8n', now + 1.5);
    }
    if (collisionCount > 10) {
        synth.triggerAttackRelease('A1', '8n', now);
        synth.triggerAttackRelease('C3', '8n', now + 0.5);
        synth.triggerAttackRelease('F2', '8n', now + 1);
        synth.triggerAttackRelease('C2', '8n')
    }
    
}

function resetGame() {
    playDeathSound();
    character.x = canvas.width/2 - character.width / 2;
    character.y = canvas.height - character.height - 40;
    level = 1;
    collisionCount++;
    gameSpeed = 1; 
}