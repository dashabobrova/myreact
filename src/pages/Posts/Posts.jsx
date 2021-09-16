// полигон для работы с API

import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Comments } from "../Comments/Comments";
import { HomePosts } from "../HomePosts/HomePosts";

export const Posts = () => {

    return (
        <div>
            <Switch>
                <Route path="/posts/comments/:postId" component={Comments}/>
                <Route exact path="/posts" component={HomePosts}/>
            </Switch>
        </div>
    )
}

