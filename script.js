let win = new Audio('win.wav')
let lose = new Audio('lose.wav')
let final_lose = new Audio('nuke.mp3')
let u = document.getElementById('u')
let ai = document.getElementById('ai')
let final_win = new Audio('poland.mp3')
let n = document.getElementById('name')
let name = prompt('Hello, what is your name?')
n.innerHTML = name

function mario(guess) {
    win.pause()
    lose.pause()
win.currentTime = 0
lose.currentTime = 0
    
    let random = Math.ceil(Math.random() * 3)

    

    if(guess == random){
        u.innerHTML++ 
        win.play()
    }
   else{
      ai.innerHTML++
       lose.play()
   } 
    if(u.innerHTML == 5){
        final_win.loop = true
         final_win.play()
        alert('Congrats! You win!')
    }
    else if(ai.innerHTML ==5){
        final_lose.loop = true
         final_lose.play()
        alert('You lose!')
    }
}

