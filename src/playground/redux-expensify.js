import { createStore, combineReducers } from 'redux';

import { createStore, combineReducers } from 'redux';

const demoState = [];

expensesReducersDefaultState = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer
    })
);

console.log(store.getState());