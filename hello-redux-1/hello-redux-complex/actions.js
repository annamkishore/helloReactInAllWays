/*
 * action types
 */
let INCREMENT = 'INCREMENT'
let DECREMENT = 'DECREMENT'
let SQUARE = 'SQUARE'
let CUBE = 'CUBE'

/*
 * action creators
 */
function increaseIt(text) {
    return { type: INCREMENT, text }
}
function decreaseIt(text) {
  return { type: DECREMENT, text }
}
function squareIt(text) {
  return { type: SQUARE, text }
}
function cubeIt(text) {
  return { type: CUBE, text }
}

module.exports = {
    INCREMENT,
    DECREMENT,
    SQUARE,
    CUBE,
    increaseIt,
    decreaseIt,
    squareIt,
    cubeIt
}
