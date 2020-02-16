import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';

import AppConttext from '../contexts/AppContext';
import reducer from '../reducers/reducer_index';

const App = () => {
    const inisialState = {
        events: [],
        operationLogs: [],
    };
    const [state, dispatch] = useReducer(reducer, inisialState);

    return (
        <>
            <AppConttext.Provider value={{ state, dispatch }}>
                <div className="container-fluid">
                    <EventForm />
                    <Events />
                    <OperationLogs />
                </div>
            </AppConttext.Provider>
        </>
    );
};

export default App;
