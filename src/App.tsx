import React, {Component} from 'react';
import './App.css';
import ShowUsers from "./users/users";

class App extends Component {
  render(){
    return(
        <div>
          <h1>Welcome to SuperLeague!</h1>
          <button className="button">Show Users</button>
          <ShowUsers firstName="Sadio" lastName="Mane"/>
        </div>
    );
  }
}

export default App;
