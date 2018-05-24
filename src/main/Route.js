import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Inserir from './../components/Inserir';
import TodoList from './../components/TodoList';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={TodoList}/>
                    <Route path='/inserir' component={Inserir}/>
                    <Route component={TodoList}/>
                </Switch>
            </main>
        )
    }
};

export default Routes;