import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  console.log("最初！");

  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);

  const [completeTodos, setCompleteTodos] = useState(["ccc"]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    //alert(index);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="ToDoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了</p>
        <ul>
          {/* マップの何番目の情報を取得したい場合、map関数の2番目の引数に配列のindexが入るのでそれを使う */}
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                {/* onClick={onClickDelete(index)} と書いてしまうと、削除ボタンを押す前にonClickDeleteが実行されてしまうので */}
                {/* アロー関数で新しく関数を生成する必要がある*/}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
