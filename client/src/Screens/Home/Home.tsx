import React from 'react';
import { NavLink } from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
            <div>
                
                <NavLink to='/chat'>
                Click here to Chat 
                </NavLink>
            </div>
        )
    }
}

export default Home;