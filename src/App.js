import React from 'react';
import { useState } from 'react';

const App = props => {
    const [state, setState] = useState(props);
    const { name, price } = state;

    return (
        <>
            現在の{name}は,{price}円です
            <div>
                <button
                    onClick={() => setState({ ...state, price: price + 1 })}
                >
                    +1
                </button>
                <button
                    onClick={() => setState({ ...state, price: price - 1 })}
                >
                    -1
                </button>
                <button onClick={() => setState(props)}>Reset</button>

                <input
                    value={name}
                    onChange={e => setState({ ...state, name: e.target.value })}
                />
            </div>
        </>
    );
};

App.defaultProps = {
    name: '',
    price: 1000,
};

export default App;
