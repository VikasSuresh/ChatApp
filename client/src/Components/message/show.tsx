import React from "react";

const show=(props:any)=>{
    if(props.name!==props.nameFromChat){
        return(
            <li className="in">
            <div className="chat-img">
                <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
            </div>
            <div className="chat-body">
                <div className="chat-message">
                    <h5>{props.nameFromChat}</h5>
                    <p>{props.contentFromChat}</p>
                </div>
            </div>
            </li>
        )
    } else{
        return(
            <li className="out">
            <div className="chat-img">
                <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
            </div>
            <div className="chat-body">
                <div className="chat-message">
                    <h5>{props.nameFromChat}</h5>
                    <p>{props.contentFromChat}</p>
                </div>
            </div>
            </li>
        )
        
    }
} 


export default show;