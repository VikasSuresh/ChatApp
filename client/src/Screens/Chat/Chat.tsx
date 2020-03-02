import React from 'react';
import io from "socket.io-client";
// import Message from "../../Components/showMessage";
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
        return(
            <div className='App'>
                <div id='chat'>
                    <ul>
                        {this.state.chat.map((el:any,index:any)=>{
                            return(
                                <div key={index}>
                                <li className="content">
                                  {el.name}-
                                  {el.content}
                                </li>
                              </div>
                            )
                        })}
                    </ul>
                    <div>
                        <form onSubmit={this.submit} >
                            <input onChange={this.handleContent.bind(this)} value={this.state.content} type="text"/><br/>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
          
        )
    }
}



export default Chat;