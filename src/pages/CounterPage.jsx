import useCounter from '../hooks/use-counter';
import Button from '../components/Button';

function CounterPage({ initialCount }) {
  const { count, handleIncrementClick, handleDecrementClick } =
    useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleIncrementClick}>Increment</Button>
      <Button onClick={handleDecrementClick}>Decrement</Button>
    </div>
  );
}

export default CounterPage;
