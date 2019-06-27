import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { FeedPage } from './FeedPage/FeedPage';
import { UsersPage } from './UsersPage/UsersPage';
import { SingleUserPage } from './SingleUserPage/SingleUserPage';
import { SinglePost } from './SinglePost/SinglePost';



export class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/people/:id" component={SingleUserPage} />
                    <Route path="/post/:id" component={SinglePost} />
                    <Route path="/feed" component={FeedPage} />
                    <Route path="/people" component={UsersPage} />
                    <Redirect to="/feed" />
                </Switch>
            </main>
        )
    }
}