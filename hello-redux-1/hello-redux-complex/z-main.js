
const MathActions = require('./actions');

const store = require('./store');

console.log(store.getState());
console.log();
// Every time the state changes, log it. Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(MathActions.increaseIt('adding'))
store.dispatch(MathActions.increaseIt('adding more'))
store.dispatch(MathActions.increaseIt('even more'))

store.dispatch(MathActions.decreaseIt('pop one'))
store.dispatch(MathActions.resetIt('all clear'))

// Stop listening to state updates
unsubscribe();
