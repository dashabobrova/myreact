import React from "react";
import { Link } from 'react-router-dom';
import { userApi } from "../../api/request/user";

export const HomePage = (props) => {
    
    return (
        <div>HomePage
            <ul>
                <li><Link to='/chatpage'>chats</Link></li>
                <li><Link to='/profile'>profile</Link></li>
                <li><Link to='/posts'>posts</Link></li>
                <li><Link to='/signUp'>Registration - signUp</Link></li>
                <li><Link to='/logIn'>logIn</Link></li>
                <li>
                    <button onClick={userApi.logout}>logOut</button>
                </li>
            </ul>
           
        </div>
    )
}

