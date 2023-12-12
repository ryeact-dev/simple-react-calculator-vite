import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import calculate from './utils/calculate';

export default function App() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (evt) => {
    setData(calculate(data, evt));
  };

  const display = `${data.total ? data.total : ''} ${
    data.operation ? data.operation : ''
  } ${data.next ? data.next : ''}`;

  return (
    <div className='component-app'>
      <Display value={display.trim() ? display : '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}
