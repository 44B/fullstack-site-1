import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Dashboard Component
    </div>
);

const AddExpensePage = () => (
    <div>
        Add Expense Component
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit Expense Component
    </div>
);

const HelpPage = () => (
    <div>
        Help Component
    </div>
);

const NotFoundPage = () => (
    <div>
        404 Not Found - <Link to="/">Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Add Expense</Link>
        <Link to="/edit">Edit Expense</Link>
        <Link to="/help">Help</Link>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} /> 
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));