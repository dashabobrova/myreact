// полигон для работы с API

import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Comments } from "../Comments/Comments";
import { HomePosts } from "../HomePosts/HomePosts";
import { Post } from "../Post/Post";

export const Posts = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/posts/comments/:postId" component={Comments}/>
                <Route exact path="/posts" component={HomePosts}/>
                <Route exact path="/posts/post/:postId" component={Post}/>
            </Switch>
        </div>
    )
}


// <Route path="/post/:postId" component={Post}/>
// <Route path="/comments/:postId" component={Comments}/>