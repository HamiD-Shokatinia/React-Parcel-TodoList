import { useReducer } from "react";

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error(console.log);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button type="button" className="btn btn-danger m-3" onClick={() => dispatch({type: 'decrement'})}>-</button>
      Count: {state.count}
      <button type="button " className="btn btn-success m-3" onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
export default Counter;