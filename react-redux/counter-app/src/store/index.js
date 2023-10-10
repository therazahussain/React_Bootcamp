// 1 FIRST METHOD TO USE THE REACT REDUX

// import { legacy_createStore as createStore } from 'redux';


// const reducerFn = (state = { counter: 0 }, action) => {

//     if(action.type === 'INC'){
//         return {counter: state.counter + 1}
//     }

//     if(action.type === 'DEC'){
//         return {counter: state.counter - 1}
//     }

//     if(action.type === 'ADD'){
//         return {counter: state.counter + action.payload}
//     }

//     return state;
// }


// const store = createStore(reducerFn)
// export default store




import { configureStore, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value: 0,
//   }

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increament(state, action) {
            state.counter++;
        },
        decreament(state, action) {
            state.counter--;
        },
        addBy(state, action) {
            state.counter += action.payload;
        }
    }
})

export const actions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store