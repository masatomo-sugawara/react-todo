import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul>
        {/* マップの何番目の情報を取得したい場合、map関数の2番目の引数に配列のindexが入るのでそれを使う */}
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* onClick={onClickDelete(index)} と書いてしまうと、削除ボタンを押す前にonClickDeleteが実行されてしまうので */}
              {/* アロー関数で新しく関数を生成する必要がある*/}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
