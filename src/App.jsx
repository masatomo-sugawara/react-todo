import "./styles.css";
import React from "react";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了</p>
        <ul>
          <div>
            <li>aaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>aaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>aaa</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
