import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FeedPage } from './FeedPage/FeedPage';
import {UsersPage} from'./UsersPage/UsersPage';


export class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    {/* <Route path="/people/:id" component={SingleUser}/> */}
                    <Route path="/feed" component={FeedPage} />
                    <Route path="/people" component={UsersPage}/>
                </Switch>
            </main>
        )
    }
}