import React, { Component } from 'react';

import Greeting from './greeting';

// class App extends Component {
//   render() {
//     return (<Greeting name="BOb" />);
//     }
//   }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Arai',
    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleNameBob() {
    this.setState({ name: 'Bob' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />
        <button onClick={() => this.handleNameBob()}>I am Bob</button>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}


export default App;
