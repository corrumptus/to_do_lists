import { useRef } from 'react';
import '../../components_css/todolist/ListInfos.css'

export default function ListInfos({
  toDoList,
  isFrontFace,
  changeFace,
  isCreating,
  isEditing,
  changeViewMode,
  closeView,
  listAPI
}) {
  const nameRef = useRef();
  const DescricaoRef = useRef();

  const infosStyle = {
    "zIndex": isFrontFace ? "0" : "1"
  };

  if (isCreating)
    return (
      <div
        className="listInfos"
        style={infosStyle}
        onClick={(e) => {
          e.stopPropagation();

          if (e.target.className !== "listInfos")
            return;

          changeFace();
        }}
      >
        <div className="listInfo name">
          <label htmlFor="name">Nome</label>
          <input id="name" ref={nameRef}/>
        </div>
        <div className="listInfo description">
          <label htmlFor="description">Descrição</label>
          <textarea id="description" rows={10} ref={DescricaoRef}/>
        </div>
        <div className="control-buttons">
          <button className="accept" onClick={() => {
            listAPI.POST(nameRef.current.value, DescricaoRef.current.value);

            closeView();
          }}>
            <img src="../../../icons/accept-icon.png" alt="icone de aceitação (confere)"/>
          </button>
          <button className="cancel" onClick={closeView}>
            <img src="../../../icons/cancel-icon.png" alt="icone de desaceitação (x)"/>
          </button>
        </div>
      </div>
    );

  if (isEditing)
    return (
      <div
        className="listInfos"
        style={infosStyle}
        onClick={(e) => {
          e.stopPropagation();
          if (e.target.className !== "listInfos") return;

          changeFace();
        }}
      >
        <div className="listInfo name">
          <label htmlFor="name">Nome</label>
          <input id="name" defaultValue={toDoList.name} ref={nameRef}/>
        </div>
        <div className="listInfo description">
          <label htmlFor="description">Descrição</label>
          <textarea id="description" defaultValue={toDoList.description} rows={10} ref={DescricaoRef}/>
        </div>
        <div className="control-buttons">
          <button className="accept" onClick={() => {
            listAPI.PUT(
              {
                ...toDoList,
                name: nameRef.current.value,
                description: DescricaoRef.current.value
              }
            );

            changeViewMode();
          }}>
            <img src="../../../icons/accept-icon.png" alt="icone de aceitação (confere)"/>
          </button>
          <button className="cancel" onClick={changeViewMode}>
            <img src="../../../icons/cancel-icon.png" alt="icone de desaceitação (x)"/>
          </button>
        </div>
      </div>
    );

  return (
    <div
      className="listInfos"
      style={infosStyle}
      onClick={(e) => {
        e.stopPropagation();
        if (e.target.className !== "listInfos") return;

        changeFace();
      }}
    >
      <div className="listInfo name">
        <p>Nome</p>
        <p className="list-name">{toDoList.name}</p>
      </div>
      <div className="listInfo description">
        <p>Descrição</p>
        <p className="list-description">{toDoList.description}</p>
      </div>
      <div className="control-buttons">
        <button className="edit" onClick={changeViewMode}>
          <img src="../../../icons/edit-icon.png" alt="icone de edição (lapiz)"/>
        </button>
        <button className="delete" onClick={() => {
          listAPI.DELETE(toDoList.id);
          closeView();
        }}>
          <img src="../../../icons/delete-icon.svg" alt="icone de deleção (borracha)"/>
        </button>
      </div>
    </div>
  );
}