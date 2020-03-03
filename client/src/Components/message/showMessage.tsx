import React from "react";
import './showMessage.css';
const Messages=(props:any)=>(
    <div className="container content">
    <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card">
                <div className="card-header">Chat</div>
                <div className="card-body height3">
                    <ul className="chat-list">
                        {props.msgs}
                    </ul>
                </div>
            </div>
        </div>
        <div id="chat-formSubmit" > 
        <form onSubmit={props.submit} >
                    <input id='chat-inputText' onChange={props.handleContent} value={props.content} type="text"/>
                    <button id="chat-submitText" type='submit'>Submit</button>
                </form>
        </div>
    </div>
</div>
);

export default Messages;