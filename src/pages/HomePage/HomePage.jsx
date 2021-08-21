import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Profile } from '../Profile/Profile';
import { ChatPage } from '../ChatPage/ChatPage';

export const HomePage = (props) => {
    return (
        <div>HomePage
            <Switch>
                <Route path='/chatpage'>
                    <ChatPage/>
                </Route>
                <Route path='/profile'>
                    <Profile/>
                </Route>
            </Switch> 
        </div>
    )
}

