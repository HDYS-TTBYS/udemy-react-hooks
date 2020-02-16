import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CREATE_EVENT, DERETE_ALL_EVENTS } from '../actions/actions_index';
import AppContext from '../contexts/AppContext';

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addEvent = e => {
        e.preventDefault(); //全体リロード停止
        dispatch({
            type: CREATE_EVENT,
            title: title,
            body: body,
        });

        setTitle('');
        setBody('');
    };

    const deleteAllEvents = e => {
        e.preventDefault();
        const result = window.confirm(
            '全てのイベントを本当に削除しても良いですか？'
        );
        if (result) {
            dispatch({ type: DERETE_ALL_EVENTS });
        }
    };
    return (
        <>
            <br />
            <h4>イベント作成フォーム</h4>
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
                    disabled={state.events.length === 0}
                >
                    全てのイベントを削除する
                </button>
            </form>
        </>
    );
};

export default EventForm;
