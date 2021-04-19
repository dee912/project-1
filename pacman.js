//! PAC-MAN

// select grid for all cells and set variables

const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start-button')
const width = 18
const cells = []

const wall = document.querySelector('.wall')
const path = document.querySelector('.path')
const div = document.querySelector('div')

let pacManPos = 19
let lives = 3
let score = 0
let food = 20

const ghosts = {
  clydePos: 152,
  blinkyPos: 153,
  pinkyPos: 170,
  inkyPos: 171,
}

const movable = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 37, 43, 46, 52, 55, 61, 64, 70, 73, 74, 75, 76, 77, 79, 82, 84, 85, 86, 87, 88,
  91, 93, 95, 96, 97, 100, 101, 102, 104, 106, 109, 111, 115, 118, 122, 124, 129, 133, 136, 140, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 
  156, 157, 158, 159, 160, 161, 166, 168, 170, 171, 173, 175, 181, 182, 184, 186, 187, 188, 189, 190, 191, 193, 195, 196, 199, 200, 202, 204, 209, 211, 213, 214,
  217, 218, 219, 220, 221, 222, 227, 228, 229, 230, 231, 232, 235, 239, 240, 241, 242, 243, 244, 245, 246, 250, 253, 260, 261, 268, 271, 278, 279, 286, 289,
  290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304]

const blocks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 36, 54, 72, 90, 108, 126, 162, 180, 198, 216, 234, 252, 270, 288, 306, 35, 53, 71, 89, 107, 125, 143, 179, 197, 215, 233, 251, 233, 251, 269, 287, 305,
  307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323 ,38, 39, 40, 41, 42, 56, 57, 58, 59, 60, 78, 127, 128, 110, 92, 94, 112, 130, 131, 113, 114, 132, 105, 123, 141, 142, 47, 48, 49, 50, 
  51, 65, 66, 67, 68, 69, 83, 119, 137, 120, 138, 103, 121, 139, 169, 44, 45, 62, 63, 80, 81, 98, 99, 116, 117, 134, 135, 163, 164, 165, 183, 201, 167, 185, 203, 236, 237, 238, 254, 255, 256, 257, 258, 259, 272, 273, 
  274, 275, 276, 277, 174, 192, 210, 178, 177, 176, 194, 212, 247, 248, 249, 262, 263, 264, 265, 266, 267, 280, 281, 282, 283, 284, 285, 69, 172, 205, 206, 207, 208, 223, 224, 225, 226]



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

movable.forEach(walk => {
  cells[walk].classList.add('path')
})
blocks.forEach(barrier => {
  cells[barrier].classList.add('wall')
})

console.log(ghosts[1])

//create a functions to remove pacman if ghostPos === pacManPos

function pacManReset() {
  if (pacManPos === ghosts.clydePos || 
    pacManPos === ghosts.blinkyPos || 
    pacManPos === ghosts.pinkyPos || 
    pacManPos === ghosts.inkyPos) {
    cells[pacManPos].classList.remove('pacman')
    pacManPos = 19
    cells[pacManPos].classList.add('pacman')
  }
}


// add event listener to start button to begin game
// assign controls to pacman and change his position 
//! movable area is 16 x 16 accounting for boarder
//! use 'keydown' so pacman can move continuously 

console.log(cells.path)

startButton.addEventListener('click', () => {
// console.log(ghosts.clydePos)

  // setInterval(() => {
  //   if (food < 325) {
  //     food++
  //     cells[food].classList.add('food')
  //   }
  // }, 1000)
  
  setInterval(() => {
    if (ghosts.clydePos > ((width ** 2) - (width * 2))) {
      cells[ghosts.clydePos].classList.remove('clyde')
      ghosts.clydePos++
      cells[ghosts.clydePos].classList.add('clyde')
    } 
    if (pacManReset()) {
      lives--
    }
  }, 1000)

  document.addEventListener('keydown', (e) => {
    
    const randomIndex = Math.floor(Math.random() * width ** 2 - 1)
    //pacman contorls
    const key = e.key
    if (key === 's' && movable.includes(pacManPos + 18)) { 
      cells[pacManPos].classList.remove('pacman')
      pacManPos += width
      cells[pacManPos].classList.add('pacman')
    } else if (key === 'w' && movable.includes(pacManPos - 18)) {
      cells[pacManPos].classList.remove('pacman')
      pacManPos -= width
      cells[pacManPos].classList.add('pacman')
    } else if (key === 'd' && movable.includes(pacManPos + 1)) {
      cells[pacManPos].classList.remove('pacman')
      pacManPos++
      cells[pacManPos].classList.add('pacman')
    } else if (key === 'a' && movable.includes(pacManPos - 1)) {
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
      score += 100
    }

    pacManReset()

    if (score === 200) {
      alert(`You win with a score of: ${score}`)
    }
  })

})



