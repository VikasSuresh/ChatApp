import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import Home from "./Screens/Home";
import Chat from "./Screens/Chat";

class App extends React.Component{
  render(){
    return(
      <div>
          <Router>
              <Route exact path="/" component={Home} />
              <Route exact path="/chat" component={Chat}/>
          </Router>
      </div>
    )
  }
}

export default App;
