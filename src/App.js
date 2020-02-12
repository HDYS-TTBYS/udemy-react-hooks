import React from 'react';
import { useState } from 'react';

const App = props => {
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);

    const reset = () => {
        setPrice(props.price);
        setName(props.name);
    };
    return (
        <>
            <p>
                現在の{name}は,{price}円です
                <div>
                    <button onClick={() => setPrice(price + 1)}>+1</button>
                    <button onClick={() => setPrice(price - 1)}>-1</button>
                    <button onClick={reset}>Reset</button>

                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
            </p>
        </>
    );
};

App.defaultProps = {
    name: '',
    price: 1000,
};

export default App;
