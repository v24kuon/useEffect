import { useState, useEffect } from 'react';

const UseEffect1 = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log('useEffectだよ');
  }, []);
  return (
    <div>
      <button onClick={() => setCount((pre) => pre + 1)}>{count}</button>
    </div>
  );
};

export default UseEffect1;
