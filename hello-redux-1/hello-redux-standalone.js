const redux = require("redux");

//------------setup------i.e create reducer & store-------------------------

// step #1, create reducer
function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'default':   return state;
    }
}

// step #2, create store
let store = redux.createStore(counter);

//-------------consume------i.e subscribe and dispatch------------------------

console.log(`initial state, i.e after creation of store: ${store.getState()}`);

store.dispatch({type: 'INCREMENT'});
console.log(`Current state from getState: ${store.getState()}`);

store.subscribe( () => console.log(`Value from subscription: ${store.getState()}`) );

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});

console.log(`Current state from getState: ${store.getState()}`);
