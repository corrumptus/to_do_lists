import { useEffect, useState } from "react";

function useToDo(changeToDoListAPI) {
  async function post(listId, text) {
    const response = await fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({"text": text, "listId": listId})
    });

    //TODO: do some verifications with the response object

    const data = await response.json();

    changeToDoListAPI.add(listId, data);
  }

  async function put(listId, toDo) {
    const response = await fetch("http://localhost:8080/todos/" + toDo.id, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({"id": toDo.id, "text": toDo.text, "listId": listId})
    });

    //TODO: do some verifications with the response object

    const data = await response.json();

    changeToDoListAPI.modify(listId, data);
  }

  async function deleteToDo(listId, id) {
    const response = await fetch("http://localhost:8080/todos/" + id, {
      method: "DELETE"
    });

    //TODO: do some verifications with the response object

    changeToDoListAPI.delete(listId, id);
  }

  return {
    "POST": post,
    "PUT": put,
    "DELETE": deleteToDo
  };
}

export default function useLists() {
  const [ lists, setLists ] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8080/lists");

        //TODO: do some verifications with the response object

        const data = await response.json();

        setLists(data);
      } catch (e) {
        setLists(null);
      }
    })();
  }, []);

  function get(index) {
    if (index === undefined)  
      return undefined;

    if (index === null)
      return null;

    return lists[index];
  }

  async function post(nome, descricao) {
    const response = await fetch("http://localhost:8080/lists", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({"name": nome, "description": descricao})
    });

    //TODO: do some verifications with the response object

    const data = await response.json();

    setLists(prev => [...prev, data]);
  }

  async function put(toDoList) {
    const { list, ...nonListData } = toDoList;

    const response = await fetch("http://localhost:8080/lists/" + toDoList.id, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(nonListData)
    });

    //TODO: do some verifications with the response object

    const data = await response.json();

    setLists(prev => prev.map(list => list.id === data.id ? data : list));
  }

  async function deleteList(id) {
    const response = await fetch("http://localhost:8080/lists/" + id, {
      method: "DELETE"
    });

    //TODO: do some verifications with the response object

    setLists(prev => prev.filter(list => list.id !== id));
  }

  function add(listId, newToDo) {
    const index = lists.findIndex(list => list.id === listId);

    if (index === -1)
      return; //exception?

    setLists(prev => prev.map((tdl, i) => {
      if (i !== index)
        return tdl;

      return {...tdl, list: [...tdl.list, newToDo]};
    }));
  }

  function modify(listId, modifiedToDo) {
    const index = lists.findIndex(list => list.id === listId);

    if (index === -1)
      return; //exception?

    setLists(prev => prev.map((tdl, i) => {
      if (i !== index)
        return tdl;

      return {...tdl, list: tdl.list.map(td => td.id !== modifiedToDo.id ? td : modifiedToDo)};
    }));
  }

  function deleteToDo(listId, toDoId) {
    const index = lists.findIndex(list => list.id === listId);

    if (index === -1)
      return; //exception?

    setLists(prev => prev.map((tdl, i) => {
      if (i !== index)
        return tdl;

      return {...tdl, list: tdl.list.filter(td => td.id !== toDoId)};
    }));
  }

  return {
    "GET": () => lists,
    "GET_ONLY": get,
    "POST": post,
    "PUT": put,
    "DELETE": deleteList,
    "useToDo": useToDo({
      "add": add,
      "modify": modify,
      "delete": deleteToDo,
    })
  };
}