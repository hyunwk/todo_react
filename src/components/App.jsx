import React from 'react';
import TodoContainer from './TodoContainer';
import './App.scss';


// 1. 함수 object
// 2. input label  o
// 3. ul todos->li a span  o
// 4. createtodo block으로 분리
// 5. setting 위쪽 효율  o
// 6. useMemo

// eslint-disable-next-line react/prefer-stateless-function
const App = class extends React.Component {
  render() {
    return (
      <>
        <h1>todos</h1>
        <TodoContainer />
      </>
    );
  }
};
export default App;
