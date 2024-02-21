import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-counter';
const DECREMENT_COUNT = 'decrement-count';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const handleIncrementClick = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const handleDecrementClick = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: parseInt(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  return (
    <Panel className='m-3'>
      <h1>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={handleIncrementClick}>Increment</Button>
        <Button onClick={handleDecrementClick}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label type>Add a lot!</label>
        <input
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
