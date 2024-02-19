import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div className='flex'>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default App;
