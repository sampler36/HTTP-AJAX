import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import axios from 'axios';

const friendsURL = 'http://localhost:5000/friends';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

fetch() {
  axios.get(friendsURL)
      .then(res => this.setState({ friends: res.data }));
 }

  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          Add Friends
        </header>
      </div>
        <div>
        <FriendList friends={this.state.friends} />
       </div>
    </>
    
    );
  }
}

export default App;
