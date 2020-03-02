import React from 'react';

class Home extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state={
            text:'Anonymous'
        }
    }
    change(e:any){
        e.preventDefault();
        this.setState({
            text:e.target.value
        })
    }
    render(){
        return(
            <div>
                <form action={`/chat/${this.state.text}`}>
                    <h3>Enter Youre NickName</h3>
                    <input onChange={this.change.bind(this)} type="text" defaultValue={this.state.text}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Home;