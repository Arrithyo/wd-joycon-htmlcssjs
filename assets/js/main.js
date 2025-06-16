const text = document.getElementById('text')
const body = document.getElementById('body')

text.style.color = 'greenyellow'

function up() {
    text.textContent = 'UP'    
}

function left() {
    text.textContent = 'LEFT'
}

function right() {
    text.textContent = 'RIGHT'
}

function down() {
    text.textContent = 'DOWN'
}

function b() {
    text.textContent = 'B'
}

function a() {
    text.textContent = 'A'
}

// keyboardEvent

document.addEventListener('keydown', function (event){
    let keyEvent = `${event.key}`
    if(keyEvent == 'a'){
        text.textContent = 'A'
    }
    if(keyEvent == 'b'){
        text.textContent = 'B'
    }
    if(keyEvent == 'ArrowUp'){
        text.textContent = 'UP'
    }
    if(keyEvent == 'ArrowLeft'){
        text.textContent = 'LEFT'
    }
    if(keyEvent == 'ArrowRight'){
        text.textContent = 'RIGHT'
    }
    if(keyEvent == 'ArrowDown'){
        text.textContent = 'DOWN'
    }
})