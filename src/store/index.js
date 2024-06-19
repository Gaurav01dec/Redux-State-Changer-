// import { createStore } from "redux"
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showToggle: true }

const counterSlice = createSlice({
    name: 'counter', // this can be anything of your choice 
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showToggle = !state.showToggle
        }
    }
})


const initialActionState = { isAuthenticated: false }
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialActionState,
    reducers: {
        login(state) {
            state.isAuthenticated= true;
        },
        logout(state) {
            state.isAuthenticated= false;
        }
    }
})



// Commented because we are goint to use ReduxToolkit createSlice
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showToggle: state.showToggle
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showToggle: state.showToggle
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showToggle: state.showToggle
//         }
//     }
//     if(action.type==='toggle'){
//         return{
//             counter: state.counter,
//             showToggle: !state.showToggle
//         }
//     }
//     else{
//         return state;
//     }
// }

// const store = createStore(counterReducer);

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store;