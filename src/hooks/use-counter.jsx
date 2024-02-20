import { useEffect, useState } from 'react';

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleIncrementClick = () => {
    setCount(count + 1);
  };

  const handleDecrementClick = () => {
    setCount(count + 1);
  };

  return {
    count,
    handleIncrementClick,
    handleDecrementClick,
  };
}

export default useCounter;
