const Redux = require("redux");
const Actions = require('./actions');

function basicOperations(state = {value: 0, message: ""}, action) {
  switch (action.type) {
    case Actions.INCREMENT:
      return Object.assign({}, {value: state.value + 1, message: action.message});
    case Actions.DECREMENT:
      return Object.assign({}, {value: state.value - 1, message: action.message});
    default:
      return state;
  }
}
function advancedOperations(state = {value: 0, message: ""}, action) {
  switch (action.type) {
    case Actions.SQUARE:
      return Object.assign({}, {value: state.value * state.value, message: action.message});
    case Actions.CUBE:
      return Object.assign({}, {value: state.value * state.value * state.value, message: action.message});
    default:
      return state;
  }
}

const mathApp = Redux.combineReducers({
  basicOperations,
  advancedOperations
});

module.exports = { mathApp }

//-------STATE SHAPE
//{
//    value: 10,
//    message: "good morning"
//}