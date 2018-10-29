import React, { Component } from 'react';
import CreatePass from './component/CreatePass';
import 'bulma';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CreatePass />
      </div>
    );
  }
}

export default App;
