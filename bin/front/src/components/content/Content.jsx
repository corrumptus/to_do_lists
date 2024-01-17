import { useEffect, useRef, useState } from 'react';

import '../../components_css/content/Content.css'
import ToDoList from '../todolist/ToDoList';

async function getData() {
  // const response = await fetch("http://localhost:8080/lists", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // });

  // const data = await response.json();

  // return data;
  return [
    {
      "name": "segunda",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    },
    {
      "name": "teste",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    },
    {
      "name": "terça",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    },
    {
      "name": "teste",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    },
    {
      "name": "terça",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    },
    {
      "name": "teste",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    },
    {
      "name": "terça",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    },
    {
      "name": "teste",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    },
    {
      "name": "terça",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    },
    {
      "name": "teste",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    },
    {
      "name": "terça",
      "list": [
        {"id": 1,
        "text": "teste"},
        {"id": 2,
        "text": "acordar"}
      ]
    }
  ];
}

function scrollToToDoList(index) {

}

export default function Content({ menuIsVisible, iniciateCompleteView }) {
  const isPressed = useRef(false);
  const startX = useRef();
  const scrollLeft = useRef();
  const [ toDoLists, setToDoList ] = useState([]);


  const navStyle = {
    "width": menuIsVisible ? "200px" : "0px",
    "padding": menuIsVisible ? "0.5em" : "unset",
    "transition": `width 0.6s ease${menuIsVisible ? "" : ", padding 0s ease 0.5s"}`
  };

  useEffect(() => {
    (async () => {
      setToDoList(await getData());
    })()
  }, []);

  return (
    <main>
      <nav style={navStyle}>
        {toDoLists.map(
          ({ name }, i) =>
            <>
              <hr />
              <p onClick={() => scrollToToDoList(i)}>{name}</p>
              {i === toDoLists.length && <hr />}
            </>
        )}
      </nav>
      <div
        className="todolists"
        onMouseDown={({ pageX, target }) => {
          isPressed.current = true;

          startX.current = pageX - target.offsetLeft;

          scrollLeft.current = target.scrollLeft;
        }}
        onMouseLeave={() => isPressed.current = false}
        onMouseUp={() => isPressed.current = false}
        onMouseMove={(e) => {
          if (!isPressed.current) return;
          
          e.preventDefault();

          const currentX = e.pageX - e.target.offsetLeft;

          const walk = (currentX - startX.current) * 3;

          e.target.scrollLeft = scrollLeft.current - walk;
        }}
      >
        {toDoLists.map(todolist => 
          <div>
            <header onClick={iniciateCompleteView}>{todolist.name}</header>
            <ToDoList onClick={iniciateCompleteView} toDoList={todolist.list}/>
          </div>
        )}
      </div>
    </main>
  );
}

/*
  estilos nav
  funções todolist click drag scroll (press, hover, move, leave)

*/