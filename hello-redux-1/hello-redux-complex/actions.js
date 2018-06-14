/*
 * action types
 */
let INCREMENT = 'INCREMENT'
let DECREMENT = 'DECREMENT'
let RESET = 'RESET'

/*
 * action creators
 */
function increaseIt(text) {
    return { type: INCREMENT, text }
}
function decreaseIt(text) {
  return { type: DECREMENT, text }
}
function resetIt(text) {
  return { type: RESET, text }
}

module.exports = {
    INCREMENT,
    DECREMENT,
    RESET,
    increaseIt,
    decreaseIt,
    resetIt
}
