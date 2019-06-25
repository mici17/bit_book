import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { FeedPage } from './FeedPage/FeedPage'


export class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/feed" component={FeedPage} />
                </Switch>
            </main>
        )
    }
}