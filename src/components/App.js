import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';

import AppConttext from '../contexts/AppContext';
import reducer from '../reducers/reducer_index';

const APP_KEY = 'appWithRedux';
const App = () => {
    const appState = localStorage.getItem(APP_KEY);
    const inisialState = appState
        ? JSON.parse(appState)
        : {
              events: [],
              operationLogs: [],
          };
    const [state, dispatch] = useReducer(reducer, inisialState);
    //監視
    useEffect(() => {
        localStorage.setItem(APP_KEY, JSON.stringify(state));
    }, [state]);

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
