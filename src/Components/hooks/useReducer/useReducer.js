import React, { useReducer, useState } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "INCREMENT_ACTION":
      return { ...state, age: state.age + 1 };
    case "DECREMENT_ACTION":
      return { ...state, age: state.age - 1 };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.next] };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.index),
      };
    case "UPDATE_TODO":
      const updatedTodos = [...state.todos];
      updatedTodos[action.index] = action.updatedTodo;
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
};

const initialState = {
  age: 22,
  name: "Tarun",
  todos: [],
};

const UseReducerExample = () => {
  const [currentState, dispatchFunction] = useReducer(
    reducerFunction,
    initialState
  );
  const [value, setValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleIncrement = () => {
    dispatchFunction({
      type: "INCREMENT_ACTION",
    });
  };

  const handleDecrement = () => {
    dispatchFunction({
      type: "DECREMENT_ACTION",
    });
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const addTodo = () => {
    if (value.trim() !== "") {
      dispatchFunction({
        type: "ADD_TODO",
        next: value,
      });
      setValue("");
    }
  };

  const deleteTodo = (index) => {
    dispatchFunction({
      type: "DELETE_TODO",
      index: index,
    });
  };

  const updateTodo = (index, updatedTodo) => {
    if (updatedTodo.trim() !== "") {
      dispatchFunction({
        type: "UPDATE_TODO",
        index: index,
        updatedTodo: updatedTodo,
      });
      setEditIndex(null); 
    }
  };

  return (
    <>
      <h4>I'm Use Reducer Example</h4>
      <h3>{currentState.age}</h3>
      <button onClick={handleIncrement}>Increment age</button>
      <button onClick={handleDecrement} style={{ marginLeft: "9px" }}>
        Decrement age
      </button>
      <br />
      <br />
      <input value={value} onChange={onChangeHandler} />
      <button onClick={addTodo} style={{ marginLeft: "9px" }}>
        Add to-do
      </button>
      {currentState.todos.map((data, index) => (
        <div key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button onClick={() => updateTodo(index, value)}>
                Save Changes
              </button>
            </>
          ) : (
            <>
              <h5>{data}</h5>
              <button onClick={() => deleteTodo(index)}>Delete todo</button>
              <button onClick={() => setEditIndex(index)}>Edit todo</button>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default UseReducerExample;
