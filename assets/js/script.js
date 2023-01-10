let step = 0;
const delayMillis = 200;
const startDelaySeconds = 5;
const emptyPauseSeconds = 0.8;

const nameMain = "Luke";
const nameAlt = "Lux";


const startDelaySteps = startDelaySeconds / delayMillis;
const emptyPauseSteps = emptyPauseSeconds / delayMillis; 
function playWelcomeAnimationStep() {
    if (step >= startDelaySteps && step <= startDelaySteps + 3) {
        let text = document.getElementById("welcome-outline").innerHTML;
        let newText = removeAt(text, startDelaySteps + 3 - step);
        document.getElementById("welcome-outline").innerHTML = newText;
        document.getElementById("welcome-text").innerHTML = newText;
    } else if (step >= 22 && step <= 24) {
        let text = document.getElementById("welcome-outline").innerHTML;
        let newText =  insert(text, step - 22, nameAlt.charAt(step - 22));
        document.getElementById("welcome-outline").innerHTML = newText;
        document.getElementById("welcome-text").innerHTML = newText;
    } else if (step >= 39 && step <= 41) {
        let text = document.getElementById("welcome-outline").innerHTML;
        let newText = removeAt(text, 41 - step);
        document.getElementById("welcome-outline").innerHTML = newText;
        document.getElementById("welcome-text").innerHTML = newText;
    } else if (step >= 45 && step <= 48) {
        let text = document.getElementById("welcome-outline").innerHTML;
        let newText =  insert(text, step - 45, nameMain.charAt(step - 45));
        document.getElementById("welcome-outline").innerHTML = newText;
        document.getElementById("welcome-text").innerHTML = newText;
    } else if (step > 48) {
        step = 0;
    }

    step++;
    changeDebug(step.toString());
    setTimeout(() => {
        playWelcomeAnimationStep()
    }, delayMillis);
}

function playWelcomeAnimationStep() {
    if (step >= 15 && step <= 18) {
        let text = document.getElementById("welcome-outline").innerHTML;
        let newText = removeAt(text, 18 - step);
        document.getElementById("welcome-outline").innerHTML = newText;
        document.getElementById("welcome-text").innerHTML = newText;
    } else if (step >= 22 && step <= 24) {
        let text = document.getElementById("welcome-outline").innerHTML;
        let newText =  insert(text, step - 22, nameAlt.charAt(step - 22));
        document.getElementById("welcome-outline").innerHTML = newText;
        document.getElementById("welcome-text").innerHTML = newText;
    } else if (step >= 39 && step <= 41) {
        let text = document.getElementById("welcome-outline").innerHTML;
        let newText = removeAt(text, 41 - step);
        document.getElementById("welcome-outline").innerHTML = newText;
        document.getElementById("welcome-text").innerHTML = newText;
    } else if (step >= 45 && step <= 48) {
        let text = document.getElementById("welcome-outline").innerHTML;
        let newText =  insert(text, step - 45, nameMain.charAt(step - 45));
        document.getElementById("welcome-outline").innerHTML = newText;
        document.getElementById("welcome-text").innerHTML = newText;
    } else if (step > 48) {
        step = 0;
    }

    step++;
    changeDebug(step.toString());
    setTimeout(() => {
        playWelcomeAnimationStep()
    }, delayMillis);
}


function insert(string, index, char) {
    return string.substring(0, index) + char + string.substring(index);
}


function removeAt(string, index) {
    return string.substring(0, index) + string.substring(index + 1);
}

function changeDebug(string) {
    try {
        document.getElementById("debug").innerHTML = string;
    } catch (error) {
        
    }
}
