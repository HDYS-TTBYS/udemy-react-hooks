import React from 'react';
import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const increment2 = () => setCount(previousCount => previousCount + 1);
    const decrement2 = () => setCount(previousCount => previousCount - 1);

    const dable = () => setCount(count * 2);

    const divide3 = () =>
        setCount(previousCount => {
            if (previousCount % 3 === 0) {
                return previousCount / 3;
            } else {
                return previousCount;
            }
        });

    const reset = () => setCount(0);

    return (
        <>
            <div>count: {count}</div>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>

            <div>
                <button onClick={increment2}>+1</button>
                <button onClick={decrement2}>-1</button>
            </div>

            <div>
                <button onClick={dable}>X2</button>
            </div>

            <div>
                <button onClick={divide3}>3の倍数の場合は３で割る</button>
            </div>

            <button onClick={reset}>Reset</button>
            <div></div>
        </>
    );
};

export default App;
