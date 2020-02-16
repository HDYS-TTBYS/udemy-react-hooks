import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import AppConttext from '../contexts/AppContext';
import reducer from '../reducers/reducer_index';

console.log({ AppConttext });

const App = () => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <>
            <AppConttext.Provider value={'Hello I am a provider'}>
                <div className="container-fluid">
                    <EventForm state={state} dispatch={dispatch} />
                    <Events state={state} dispatch={dispatch} />
                </div>
            </AppConttext.Provider>
        </>
    );
};

export default App;
