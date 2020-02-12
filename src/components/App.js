import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <div className="container-fluid">
                <h4>イベント作成フォーム</h4>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input className="form-control" id="formEventTitle" />
                </div>

                <div className="form-group">
                    <label htmlFor="formEventBody">ボディー</label>
                    <textarea className="form-control" id="formEventBody" />
                </div>

                <button className="btn btn-primary">イベントを作成する</button>
                <button className="btn btn-danger">
                    全てのイベントを削除する
                </button>

                <h4>イベント一覧</h4>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">タイトル</th>
                            <th scope="col">ボディー</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default App;
