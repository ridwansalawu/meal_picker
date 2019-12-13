import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    users:[]
  };

  componentDidMount() {
    fetch('/api/users')
        .then(response => response.json())
        .then(json => {
          this.setState({users: json})
        });
  }


  render() {
    const userElements = this.state.users.map((user) => <li>{user.username}, {user.email}</li> )
    return (
      <div>
      <header className="App-header">Current Users</header>
                <ul>{userElements}</ul>
      </div>
    );
  }
}

export default App;
