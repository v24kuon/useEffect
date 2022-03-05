import { useState, useEffect } from 'react';

const UseEffect1 = () => {
  const [count, setCount] = useState<number>(0);
  const [item, setItem] = useState<string>('');
  useEffect(() => {
    console.log('useEffectだよ');
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((pre) => pre + 1)}>{count}</button>
      <input type='text' value={item} onChange={(e) => setItem(e.target.value)} />
    </div>
  );
};

export default UseEffect1;
