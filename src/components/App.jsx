import React from 'react';
import TodoContainer from './TodoContainer';
import './App.scss';

const App = class extends React.Component {
  render() {
    return (
      <div
        className="main-container"
      >
        <h1>todos</h1>
        <TodoContainer />
      </div>

    );
  }
};

export default App;
