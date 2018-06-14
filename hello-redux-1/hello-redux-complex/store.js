
const Redux = require("redux");
const Reducers = require('./reducers');

let store = Redux.createStore(Reducers.counterApp);

module.exports = store;
