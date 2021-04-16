//! PAC-MAN

// select grid for all cells and set variables

const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start-button')
const width = 18
const cells = []
let pacManPos = 19
let lives = 3

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

// add event listener to start button to begin game
// assign controls to pacman and change his position 
//! movable area is 16 x 16 accounting for boarder
//! use 'keydown' so pacman can move continuously 

// startButton.addEventListener('click', () => {

document.addEventListener('keydown', (e) => {
  // console.log(e.key)
  const key = e.key
  if (key === 's' && pacManPos < ((width ** 2) - (width * 2))) {
    cells[pacManPos].classList.remove('pacman')
    pacManPos += width
    cells[pacManPos].classList.add('pacman')
  } else if (key === 'w' && pacManPos > width * 2 - 1) {
    cells[pacManPos].classList.remove('pacman')
    pacManPos -= width
    cells[pacManPos].classList.add('pacman')
  } else if (key === 'd' && !((pacManPos + 2) % width === 0)) {
    cells[pacManPos].classList.remove('pacman')
    pacManPos++
    cells[pacManPos].classList.add('pacman')
  } else if (key === 'a' && !((pacManPos - 1) % width === 0)) {
    cells[pacManPos].classList.remove('pacman')
    pacManPos--
    cells[pacManPos].classList.add('pacman')
  }
})
// })