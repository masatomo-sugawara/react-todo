import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={style}>
      <input
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChangeTodoText}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
