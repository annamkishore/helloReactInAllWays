
const Redux = require("redux");
const Reducers = require('./reducers');

let store = Redux.createStore(Reducers.mathApp);

module.exports = store;
