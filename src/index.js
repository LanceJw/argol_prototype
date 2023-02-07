import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import {createStore} from 'redux'
// import allReducers from './reducers/Index';
// import {Provider} from 'react-redux';

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </Provider>
);

// STORE (Holds all the data/state for our application)



// ACTION (Describe what you want to do) - A function that returns an object
// const rangeHandler = () => {
//   return {
//     type: "RANGE_HANDLER"
//   }
// }


// REDUCER (Describe how your actions transform the state)
// const displayedRange = (state = " ", action) => {
//   if(action.type === "RANGE_HANDLER") {
//     return state = 'WorkMaster'
//   }
// }


// let store = createStore(displayedRange);

// store.subscribe(() => {
//   console.log(store.getState()); 
// })

// DISPATCH (Execute the actions to the reducer)
// store.dispatch(rangeHandler());





