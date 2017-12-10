import React from 'react';

import Greeting from './greeting';

// class App extends Component {
//   render() {
//     return (<Greeting name="BOb" />);
//     }
//   }

function App() {
  return (
    <div>
      <Greeting name="BOb" />
      <Greeting name="john" />
    </div>
  );
}


export default App;
