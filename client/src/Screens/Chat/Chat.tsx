import React from 'react';
import io from "socket.io-client";
import Messages from "../../Components/message/showMessage";
import Show from "../../Components/message/show";
const socket:any=io('http://localhost:8000');
class Chat extends  React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state={
            chat: [],
            content: '',
            name: '',
        }
    }
    componentDidMount(){
        socket.on('init', (msg:any) => {
            this.setState((state:any) => ({
                name:this.props.match.params.name,
                chat: [...state.chat, ...msg.reverse()],
            }));
          });

          socket.on('push', (msg:any) => {
            this.setState((state:any) => ({
              chat: [...state.chat, msg],
            }));
          });
    }
    handleContent(event:any) {
        this.setState({
          content: event.target.value,
        });
      }
    
    submit=(e:any)=>{
        e.preventDefault();
        this.setState((prevState:any)=>{
            socket.emit('message', {name: this.state.name,content: this.state.content});
            return{
                chat:[...prevState.chat,{name:this.state.name,content:this.state.content}],
                content:' '
            }
            })
    }
    render(){
        var msgs:any = this.state.chat.map((el:any,index:any)=>(
            <Show key={index} name={this.state.name} nameFromChat={el.name} contentFromChat={el.content} />
        ))
        return(
            <div className='App'>
               <Messages msgs={msgs} submit={this.submit} handleContent={this.handleContent.bind(this)} content={this.state.content}/>
            </div>
          
        )
    }
}



export default Chat;