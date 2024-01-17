import { memo, useState } from "react";
import AbstractToDoList from "./AbstractToDoList";
import ListInfos from './ListInfos';
import '../../components_css/todolist/CompleteToDoList.css';

const CompleteToDoList = memo(({
  toDoList,
  closeView,
  listAPI,
  toDoAPI
}) => {
  const [ isListView, setIsListView ] = useState(toDoList !== null);
  const [ isViewing, setIsViewing ] = useState(toDoList !== null);

  function changeCompleteFace() {
    setIsListView(prev => !prev);
  }

  function changeViewMode() {
    setIsViewing(prev => !prev);
  }

  const toDoListStyle = {
    "height": "500px",
    "padding": "20px"
  };

  const presilhaStyle = {
    "componentStyle": {
      "transform": "translateY(calc(-50% - 20px))"
    },
    "quadradoStyle": {
      "width": "50px",
      "height": "40px"
    },
    "trianguloStyle": {
      "borderWidth": "20px"
    }
  };

  const listStyle = {
    "padding": "20px 10px 0px"
  };

  const imgContainerStyle = {
    "width": "45px",
    "height": "45px",
    "top": "-45px"
  };

  const imgStyle = {
    "width": "45px",
    "height": "45px"
  };

  if (toDoList === null)
    return (
      <div className="complete-list" onClick={closeView}>
        <div className="close-complete" onClick={closeView}>
          <img src="../../icons/cancel-icon.png" alt="x (icone de fechar)"/>
        </div>
        <div className="list-infos">
          <ListInfos
            isCreating={toDoList === null}
            isFrontFace={isListView}
            changeFace={changeCompleteFace}
            closeView={closeView}
            listAPI={listAPI}
          />
          <AbstractToDoList
            isNew={true}
            onClickComponent={e => {
              e.stopPropagation();

              if (
                !(e.target instanceof HTMLDivElement)
                  &&
                !(e.target instanceof HTMLUListElement)
              ) return;

              changeCompleteFace();
            }}
            onClickImg={e => {
              e.stopPropagation();

              changeCompleteFace();
            }}
            toDoListStyle={toDoListStyle}
            presilhaStyle={presilhaStyle}
            listStyle={listStyle}
            imgContainerStyle={imgContainerStyle}
            imgStyle={imgStyle}
            img={"flip-icon.png"}
            imgAlt={"setas circulares (icone de rotacionar)"}
            toDoAPI={toDoAPI}
          />
        </div>
      </div>
    );

  return (
    <div className="complete-list" onClick={closeView}>
      <div className="close-complete" onClick={closeView}>
        <img src="../../icons/cancel-icon.png" alt="x (icone de fechar)"/>
      </div>
      <div className="list-infos">
        <ListInfos
          toDoList={toDoList}
          isFrontFace={isListView}
          changeFace={changeCompleteFace}
          isEditing={!isViewing}
          changeViewMode={changeViewMode}
          closeView={closeView}
          listAPI={listAPI}
        />
        <AbstractToDoList
          toDoList={toDoList}
          onClickComponent={e => {
            e.stopPropagation();

            if (
              !(e.target instanceof HTMLDivElement)
                &&
              !(e.target instanceof HTMLUListElement)
            ) return;

            changeCompleteFace();
          }}
          img={"flip-icon.png"}
          imgAlt={"setas circulares (icone de rotacionar)"}
          onClickImg={e => {
            e.stopPropagation();

            changeCompleteFace();
          }}
          toDoListStyle={toDoListStyle}
          presilhaStyle={presilhaStyle}
          listStyle={listStyle}
          imgContainerStyle={imgContainerStyle}
          imgStyle={imgStyle}
          toDoAPI={toDoAPI}
        />
      </div>
    </div>
  );
}, (prevProps, newProps) => {
  if (JSON.stringify(prevProps.toDoList) !== JSON.stringify(newProps.toDoList))
    return false;

  return true;
});

export default CompleteToDoList;