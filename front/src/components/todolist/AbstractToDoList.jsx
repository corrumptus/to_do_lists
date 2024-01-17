import { useState } from "react";
import Presilha from "./Presilha";
import ToDo from "./ToDo";
import '../../components_css/todolist/AbstractToDoList.css'

export default function AbstractToDoList ({
  isNew,

  toDoList,
  toDoListStyle,
  presilhaStyle,
  listStyle,
  onClickComponent,
  onClickImg,
  toDoAPI,

  img,
  imgAlt,
  imgContainerStyle,
  imgStyle
}) {
  const [ toDoNewMode, setToDoNewMode ] = useState("new");
  const [ toDosState, setToDosState ] = useState(toDoList?.list.map(() => "view"));
  const inverseState = {
    "new": "creating",
    "creating": "new",
    "view": "editing",
    "editing": "view"
  };

  function switchCreatingMode() {
    setToDoNewMode(prev => inverseState[prev]);
  }

  function switchEditingMode(index) {
    setToDosState(prev => prev.map((s, i) => i !== index ? s : inverseState[s]));
  }

  if (isNew)
    return (
      <div className="todolist" style={toDoListStyle} onClick={onClickComponent}>
        <div className="list-action-img" onClick={onClickImg} style={imgContainerStyle}>
          <img src={"../../../icons/" + img} alt={imgAlt} style={imgStyle}/>
        </div>
        <Presilha style={presilhaStyle}/>
        <ul className="list-todo" style={listStyle}></ul>
      </div>
    );

  return (
    <div className="todolist" style={toDoListStyle} onClick={onClickComponent}>
      <div className="list-action-img" onClick={onClickImg} style={imgContainerStyle}>
        <img src={"../../../icons/" + img} alt={imgAlt} style={imgStyle}/>
      </div>
      <Presilha style={presilhaStyle}/>
      <ul className="list-todo" style={listStyle}>
        {toDoList.list
          .map((toDo, i) =>
            <li key={JSON.stringify(toDo)}>
              <ToDo
                toDo={toDo}
                mode={toDosState[i]}
                switchEditingMode={() => switchEditingMode(i)}
                toDoAPI={toDoAPI}
                toDoListID={toDoList.id}
              />
            </li>
          )
        }
        <li>
          <ToDo
            mode={toDoNewMode}
            switchCreatingMode={switchCreatingMode}
            toDoAPI={toDoAPI}
          />
        </li>
      </ul>
    </div>
  );
}