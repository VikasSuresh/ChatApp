import React from 'react';
import io from "socket.io-client";
const socket:any=io('http://localhost:8000');
class Chat extends  React.Component<any,any>{
    private getText:React.RefObject<HTMLInputElement>;
    constructor(props:any){
        super(props);
        this.getText=React.createRef();
        this.state={
            msg:'',
            fromServer:''
        }
    }
    submit=(e:any)=>{
        e.preventDefault();
        socket.emit('chat message',this.getText.current?.value)
        socket.on('chat message',(msg:any)=>{
            this.setState((prevState:any)=>({
                ...prevState,
                fromServer:msg
                })
            )
        })
        
    }
    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.submit}>
                        <div>
                        <input ref={this.getText} type="text" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <ul id="messages">
                    {this.state.fromServer}
                </ul>
            </div>
          
        )
    }
}



export default Chat;