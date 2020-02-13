import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event';
import reducer from '../reducers/reducer_index';

const App = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addEvent = e => {
        e.preventDefault(); //全体リロード停止
        dispatch({
            type: 'CREATE_EVENT',
            title: title,
            body: body,
        });

        setTitle('');
        setBody('');
    };

    const deleteAllEvents = e => {
        e.preventDefault(); //全体リロード停止
        const result = window.confirm('すべてのイベントを削除？');
        if (result === true) {
            dispatch({
                type: 'DERETE_ALL_EVENTS',
            });
        }
    };

    return (
        <>
            <div className="container-fluid">
                <h4>イベント作成フォーム</h4>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input
                        className="form-control"
                        id="formEventTitle"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="formEventBody">ボディー</label>
                    <textarea
                        className="form-control"
                        id="formEventBody"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                </div>

                <button
                    className="btn btn-primary"
                    onClick={addEvent}
                    disabled={!title || !body}
                >
                    イベントを作成する
                </button>
                <button
                    className="btn btn-danger"
                    onClick={deleteAllEvents}
                    disabled={state.length === 0}
                >
                    全てのイベントを削除する
                </button>

                <h4>イベント一覧</h4>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">タイトル</th>
                            <th scope="col">ボディー</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((event, index) => (
                            <Event
                                key={index}
                                event={event}
                                dispatch={dispatch}
                            />
                        ))}
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default App;
