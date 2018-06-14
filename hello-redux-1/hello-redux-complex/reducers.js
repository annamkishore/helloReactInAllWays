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
function moreOperations(state = {value: 0, message: ""}, action) {
  switch (action.type) {
    case Actions.RESET:
      return Object.assign({}, {value: 0, message: action.message});
    default:
      return state;
  }
}

const counterApp = Redux.combineReducers({
  basicOperations,
  moreOperations
});

module.exports = { counterApp };

//-------STATE SHAPE
//{
//    value: 10,
//    message: "good morning"
//}