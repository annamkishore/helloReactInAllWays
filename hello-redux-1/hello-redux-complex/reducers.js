const Redux = require("redux");
const Actions = require('./actions');

// Reducer #1
function counterOperations(state = {value: 0, message: ""}, action) {
  switch (action.type) {
    case Actions.INCREMENT:
      return Object.assign({}, {value: state.value + 1, message: action.text});
    case Actions.DECREMENT:
      return Object.assign({}, {value: state.value - 1, message: action.text});
    default:
      return state;
  }
}

// Reducer #2
function logOperation(state = [], action) {
  switch (action.type) {
    case Actions.LOG_NAME:
      return [...state, action.name];
    default:
      return state;
  }
}

// Root Reducer
const counterApp = Redux.combineReducers({
  counterOperations,
  logOperation
});

module.exports = { counterApp };

//-------STATE SHAPE
//{
//    counterOperations: [value: 10, message: "added some value"],
//    logOperation: ["kishore", "krishna"]
//}