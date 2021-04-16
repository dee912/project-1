//! PAC-MAN

// select grid for all cells and set variables

const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start-button')
const width = 18
const cells = []

let pacManPos = 19
let lives = 3

const ghosts = {
  clydePos: 152,
  blinkyPos: 153,
  pinkyPos: 170,
  inkyPos: 171,
}

let food = 20

// create cells

for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  grid.appendChild(div)
  div.innerHTML = i
  div.style.width = `${100 / width}%`
  div.style.height = `${100 / width}%`
  cells.push(div)
  
}

// add classes from css to pacman, ghosts and food

cells[pacManPos].classList.add('pacman')
cells[ghosts.clydePos].classList.add('clyde')
cells[ghosts.blinkyPos].classList.add('blinky')
cells[ghosts.pinkyPos].classList.add('pinky')
cells[ghosts.inkyPos].classList.add('inky')
cells[food].classList.add('food')
// cells[food].classList.add('food')

console.log(ghosts[1])

//create a functions to remove pacman if ghostPos === pacManPos

function pacManReset() {
  if (pacManPos === ghosts.clydePos || 
    pacManPos === ghosts.blinkyPos || 
    pacManPos === ghosts.pinkyPos || 
    pacManPos === ghosts.inkyPos) {
    cells[pacManPos].classList.remove('pacman')
    pacManPos = 19
    lives--
    cells[pacManPos].classList.add('pacman')
  }
}


// add event listener to start button to begin game
// assign controls to pacman and change his position 
//! movable area is 16 x 16 accounting for boarder
//! use 'keydown' so pacman can move continuously 

startButton.addEventListener('click', () => {
// console.log(ghosts.clydePos)

  setInterval(() => {
    if (food < 325) {
      food++
      cells[food].classList.add('food')
    }
  }, 1000)

  setInterval(() => {
    if (ghosts.clydePos < ((width ** 2) - (width * 2))) {
      cells[ghosts.clydePos].classList.remove('clyde')
      ghosts.clydePos++
      cells[ghosts.clydePos].classList.add('clyde')
    } 
    pacManReset()
  }, 1000)

  document.addEventListener('keydown', (e) => {
    
    const randomIndex = Math.floor(Math.random() * width ** 2 - 1)
    //pacman contorls
    const key = e.key
    if (key === 's' && pacManPos < ((width ** 2) - (width * 2))) {
      cells[pacManPos].classList.remove('pacman')
      pacManPos += width
      cells[pacManPos].classList.add('pacman')
    } else if (key === 'w' && pacManPos > width * 2 - 1) {
      cells[pacManPos].classList.remove('pacman')
      pacManPos -= width
      cells[pacManPos].classList.add('pacman')
    } else if (key === 'd' && !((pacManPos + 2) % width === 0) || key === 'd' && pacManPos === 160) {
      cells[pacManPos].classList.remove('pacman')
      pacManPos++
      cells[pacManPos].classList.add('pacman')
    } else if (key === 'a' && !((pacManPos - 1) % width === 0) || key === 'a' && pacManPos === 145) {
      cells[pacManPos].classList.remove('pacman')
      pacManPos--
      cells[pacManPos].classList.add('pacman')
    }
    //tunnel at centre of the map
    if (pacManPos === 162) {
      cells[pacManPos].classList.remove('pacman')
      pacManPos = 144
      cells[pacManPos].classList.add('pacman')
    } else if (pacManPos === 143) {
      cells[pacManPos].classList.remove('pacman')
      pacManPos = 161
      cells[pacManPos].classList.add('pacman')
    }
    //food rules

    if (pacManPos === food) {
      cells[food].classList.remove('food')
      food = randomIndex
      cells[food].classList.add('food')
    }

    pacManReset()
  })

})



