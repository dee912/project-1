const boarder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 36, 54, 72, 90, 108, 126, 162, 180, 198, 216, 234, 252, 270, 288, 306,
  35, 53, 71, 89, 107, 125, 143, 161, 179, 197, 215, 233, 251, 233, 251, 269, 305,
  307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323]

const wallTopL = [38, 39, 40, 41, 42, 56, 57, 58, 59, 60, 78,
  127, 128, 110, 92,
  94, 112, 130, 131, 113, 114, 132,
  105, 123, 141, 142]

const wallTopR = [47, 48, 49, 50, 51, 65, 66, 67, 68, 69, 83, 
  119, 137, 120, 138, 103, 121, 139]

const wallTopC = [44, 45, 62, 63, 80, 81, 98, 99, 116, 117, 134, 135]

const wallBottomL = [163, 164, 165, 183, 201, 167, 185, 203,
  236, 237, 238, 254, 255, 256, 257, 258, 259, 272, 273, 274, 275, 276, 277]

const wallBottomR = [174, 192, 210, 178, 177, 176, 194, 212,
  247, 248, 249, 262, 263, 264, 265, 266, 267, 280, 281, 282, 283, 284, 285]

const wallBottomC = [ 169, 172, 205, 206, 207, 208, 223, 224, 225, 226]

  const blocks = [38, 39, 40, 41, 42, 56, 57, 58, 59, 60, 78, 127, 128, 110, 92, 94, 112, 130, 131, 113, 114, 132, 105, 123, 141, 142, 47, 48, 49, 50, 
  51, 65, 66, 67, 68, 69, 83, 119, 137, 120, 138, 103, 121, 139, 44, 45, 62, 63, 80, 81, 98, 99, 116, 117, 134, 135, 163, 164, 165, 183, 201, 167, 185, 203,
  236, 237, 238, 254, 255, 256, 257, 258, 259, 272, 273, 274, 275, 276, 277, 174, 192, 210, 178, 177, 176, 194, 212,
  247, 248, 249, 262, 263, 264, 265, 266, 267, 280, 281, 282, 283, 284, 285, 69, 172, 205, 206, 207, 208, 223, 224, 225, 226]

  
const path = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 37, 43, 46, 52, 55, 61, 64, 70, 73, 74, 75, 76, 77, 79, 82, 84, 85, 86, 87, 88,
  91, 93, 95, 96, 97, 100, 101, 102, 104, 106, 109, 111, 115, 118, 122, 124, 129, 133, 136, 140, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 
  156, 157, 158, 159, 160, 161, 166, 168, 170, 171, 173, 175, 181, 182, 184, 186, 187, 188, 189, 190, 191, 193, 195, 196, 199, 200, 202, 204, 209, 211, 213, 214,
  217, 218, 219, 220, 221, 222, 227, 228, 229, 230, 231, 232, 235, 239, 240, 241, 242, 243, 244, 245, 246, 250, 253, 260, 261, 268, 271, 278, 279, 286, 289
  290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304]

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

//   //top half
// for (let i = 0; i < cells.length; i++) {
//   cells[i].classList.add('path')
// }
// for (let i = 0; i < width; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 0; i < cells.length; i += 18) {
//   cells[i].classList.add('wall')
// }
// for (let i = 17; i < cells.length; i += 18) {
//   cells[i].classList.add('wall')
// }
// for (let i = 306; i < cells.length; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 38; i < 43; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 56; i < 61; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 47; i < 52; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 65; i < 70; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 44; i < 152; i += 18) {
//   cells[i].classList.add('wall')
// }
// for (let i = 45; i < 153; i += 18) {
//   cells[i].classList.add('wall')
// }
// for (let i = 78; i < 84; i += 5) {
//   cells[i].classList.add('wall')
// }
// for (let i = 92; i < 146; i += 18) {
//   cells[i].classList.add('wall')
// }
// for (let i = 105; i < 159; i += 18) {
//   cells[i].classList.add('wall')
// }
// for (let i = 94; i < 104; i += 9) {
//   cells[i].classList.add('wall')
// }
// for (let i = 112; i < 115; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 130; i < 133; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 119; i < 122; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 137; i < 140; i++) {
//   cells[i].classList.add('wall')
// }

// //bottom half
// for (let i = 169; i < 173; i += 3) {
//   cells[i].classList.add('wall')
// }
// for (let i = 163; i < 166; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 183; i < 219; i += 18) {
//   cells[i].classList.add('wall')
// }
// for (let i = 176; i < 179; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 194; i < 230; i += 18) {
//   cells[i].classList.add('wall')
// }
// for (let i = 167; i < 221; i += 18) {
//   cells[i].classList.add('wall')
// }
// for (let i = 174; i < 228; i += 18) {
//   cells[i].classList.add('wall')
// }
// for (let i = 205; i < 209; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 223; i < 227; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 236; i < 239; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 254; i < 260; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 272; i < 278; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 247; i < 250; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 262; i < 268; i++) {
//   cells[i].classList.add('wall')
// }
// for (let i = 280; i < 286; i++) {
//   cells[i].classList.add('wall')
// }

// // remove for tunnel
// cells[161].classList.remove('wall')
// cells[144].classList.remove('wall')