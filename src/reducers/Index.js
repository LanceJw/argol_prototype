// This file is to combine multiple reducers. Since I only have 1 at the moment, I do not need anything in this file

// Below is an example if I have multiple reducers and I want to combine them all in order to use in createStore();


// import counterReducer from '.../'
// import isLoggedReducer from '.../'
// import { combineReducer } from 'redux'

// const allReducers = combineReducers({
//  <any name we want> : counterReducer
//  <any name we want> : isLoggedReducer
// })


// Actual Working code vv

// import { combineReducers } from "redux";
// import rangeReducer from "./rangeReducer";


// const allReducers = combineReducers({
//     range: rangeReducer
// })

// export default allReducers