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

const demoState = {
    expenses: [{
        id: 'testone',
        description: 'secondMonth',
        note: 'This final payment',
        amount: 65000,
        createdAt: 0
    }],
    filters: {
        text: 'rant',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};