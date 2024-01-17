import '../../components_css/todolist/ToDoList.css'
import Presilha from './Presilha'
import { useState } from 'react';

  async function removeClick(input, todo) {
    input.disabled = true;

    const response = await removeToDo(todo);

    if (response.error) {
      input.style.animation = "error 1s linear";

      setTimeout(() => {
        input.style.animation = "";
      }, 1000);

      return;
    }

    setFinalList(isSimplified ? response.new.splice(6) : response.new);
  }

export default function ToDoList({ id, toDoList, removeToDo, isSimplified, size }) {
  const finalList = isSimplified ? toDoList.splice(6) : toDoList;

  const width = size === "small" ? "" : "";
  const height = size === "small" ? "" : "";
  const padding = size === "small" ? "" : "";


  return (
    <div
      id={id}
      className='todolist'
      style={{
        "width": width,
        "height": height,
        "padding": padding
      }}
    >
      <Presilha />
      <ul>
        {finalList
          .map(
            todo =>
              <li>
                <span id={todo.id}>
                  <input
                    type="checkbox"
                    onClick={(e) => removeClick(e.target, todo)}
                  />
                  {todo.text}
                  <button>
                    editar
                    {/* <img src="" alt="imagem de um lapis (editar)" /> */}
                  </button>
                </span>
                <hr />
              </li>
          )}
      </ul>
    </div>
  );
}