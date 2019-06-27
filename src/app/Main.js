import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { FeedPage } from './FeedPage/FeedPage';
import { SinglePost } from './SinglePost/SinglePost';
import { UsersPage } from './UsersPage/UsersPage';


export class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/post/:id" component={SinglePost} />
                    <Route path="/feed" component={FeedPage} />
                    <Route path="/people" component={UsersPage} />
                    <Redirect to="/feed" />
                    {/* <Route path="/people/:id" component={SingleUser}/> */}
                </Switch>
            </main>
        )
    }
}