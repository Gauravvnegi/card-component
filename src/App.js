import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Component is being initialized');
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  componentDidMount() {
    console.log('ComponentDidMount: Component has been mounted to the DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate: Component has been updated');
    console.log('Previous State:', prevState);
    console.log('Current State:', this.state);
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is about to be removed from the DOM');
  }

  render() {
    console.log('Render: Component is rendering/re-rendering');
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button type="button" onClick={this.handleClick}>
          Click
        </button>
      </div>
    );
  }
}

export default App;
