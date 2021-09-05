import React from "react";
import { Link } from 'react-router-dom';

export const HomePage = (props) => {
    return (
        <div>HomePage
            <ul>
                <li><Link to='/chatpage'>chats</Link></li>
                <li><Link to='/profile'>profile</Link></li>
                <li><Link to='/posts'>posts</Link></li>
            </ul>
           
        </div>
    )
}

