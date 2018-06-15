
const CounterActions = require('./actions');

const store = require('./store');

console.log(store.getState());
console.log();
// Every time the state changes, log it. Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(CounterActions.increaseIt('adding'))
store.dispatch(CounterActions.increaseIt('adding more'))
store.dispatch(CounterActions.increaseIt('even more'))

store.dispatch(CounterActions.decreaseIt('pop one'))
store.dispatch(CounterActions.logName('kishore'))
store.dispatch(CounterActions.logName('krishna'))
store.dispatch(CounterActions.logName('Sri'))
store.dispatch(CounterActions.logName('Hello'))

// Stop listening to state updates
unsubscribe();
