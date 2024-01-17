import { useId, useRef } from "react";
import '../../components_css/todolist/ToDo.css'

export default function ToDo({
  toDo,
  toDoListID,
  mode,
  switchCreatingMode,
  switchEditingMode,
  toDoAPI
}) {
  const toDoText = useRef();
  const id = useId();

  if (mode === "new")
    return (
      <>
        <span className="todo">
          <button className="new-todo" onClick={switchCreatingMode}>
            <img src="../../../icons/new-icon.png" alt="icone de criação (mais)"/>
          </button>
        </span>
        <hr />
      </>
    );

  if (mode === "creating")
    return (
      <>
        <span className="todo">
          <input type="text" name="text" ref={toDoText}/>
          <div className="edit-todo">
            <button className="accept" onClick={() => {
              toDoAPI.POST(toDoListID, toDoText.current.value);

              switchCreatingMode();
            }}>
              <img src="../../../icons/accept-icon.png" alt="icone de aceitação (confere)"/>
            </button>
            <button className="cancel" onClick={switchCreatingMode}>
              <img src="../../../icons/cancel-icon.png" alt="icone de desaceitação (x)"/>
            </button>
          </div>
        </span>
        <hr />
      </>
    );

  if (mode === "editing")
    return (
      <>
        <span className="todo">
          <input type="text" name="text" defaultValue={toDo.text} ref={toDoText}/>
          <div className="edit-todo">
            <button className="accept" onClick={() => {
              toDoAPI.PUT(toDoListID, {...toDo, text: toDoText.current.value});

              switchEditingMode();
            }}>
              <img src="../../../icons/accept-icon.png" alt="icone de aceitação (confere)"/>
            </button>
            <button className="cancel" onClick={switchEditingMode}>
              <img src="../../../icons/cancel-icon.png" alt="icone de desaceitação (x)"/>
            </button>
          </div>
        </span>
        <hr />
      </>
    );

  if (mode === "view")
    return (
      <>
        <span className="todo">
          <input
            type="checkbox"
            onClick={() => toDoAPI.DELETE(toDoListID, toDo.id)}
            id={id}
          />
          <p>{toDo.text}</p>
          <button onClick={switchEditingMode}>
            <img src="../../../icons/edit-icon.png" alt="icone de edição (lapiz)"/>
          </button>
        </span>
        <hr />
      </>
    );
}