/*
 * action types
 */
let INCREMENT = 'INCREMENT'
let DECREMENT = 'DECREMENT'
let LOG_NAME = 'LOG_NAME'

/*
 * action creators
 */
function increaseIt(text) {
    return { type: INCREMENT, text }
}
function decreaseIt(text) {
  return { type: DECREMENT, text }
}
function logName(name) {
  return { type: LOG_NAME, name }
}

module.exports = {
    INCREMENT,
    DECREMENT,
    LOG_NAME,
    increaseIt,
    decreaseIt,
    logName
}
