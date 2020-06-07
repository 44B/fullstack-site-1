import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './selectors/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({ description: 'Water Bill' }));
store.dispatch(addExpense({ description: 'Gas Bill' }));

setTimeout(() => {
    store.dispatch(setTextFilter('Rent'));
}, 3000)



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);  

ReactDOM.render(jsx, document.getElementById('app'));    