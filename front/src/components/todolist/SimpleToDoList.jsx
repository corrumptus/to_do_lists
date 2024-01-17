import AbstractToDoList from "./AbstractToDoList";

export default function SimpleToDoList({ toDoList, visualize, toDoAPI }) {
  const toDoListStyle = {
    "height": "300px",
    "padding": "10px"
  };

  const presilhaStyle = {
    "componentStyle": {
      "transform": "translateY(calc(-50% - 10px))"
    },
    "quadradoStyle": {
      "width": "36px",
      "height": "26px"
    },
    "trianguloStyle": {
      "borderWidth": "13px"
    }
  };

  const listStyle = {
    "padding": "16px 5px 0px"
  };

  const imgContainerStyle = {
    "width": "35px",
    "height": "35px",
    "top": "-35px"
  };

  const imgStyle = {
    "width": "35px",
    "height": "35px"
  };

  return (
    <div>
      <header onClick={visualize}>{toDoList.name}</header>
      <AbstractToDoList
        toDoList={toDoList}
        onClickComponent={(e) => {
          e.stopPropagation();

          if (
            !(e.target instanceof HTMLDivElement)
              &&
            !(e.target instanceof HTMLUListElement)
          ) return;

          visualize();
        }}
        img={"open-icon.png"}
        imgAlt={"icone de exibição (flechas contrárias)"}
        onClickImg={visualize}
        toDoListStyle={toDoListStyle}
        presilhaStyle={presilhaStyle}
        listStyle={listStyle}
        imgContainerStyle={imgContainerStyle}
        imgStyle={imgStyle}
        toDoAPI={toDoAPI}
      />
    </div>
  );
}