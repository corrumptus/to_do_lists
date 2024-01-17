import { useState } from 'react'
import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import CompleteToDoList from './components/todolist/CompleteToDoList.jsx'
import './App.css'
import useLists from './custom_hooks/useLists.jsx'

function haveToDoWithText(toDoList, text) {
  for (let todo of toDoList)
    if (todo.text.indexOf(text) !== -1)
      return true;

  return false;
}

function filterToDoList({ name, description, todoText }, tdL) {
  if (name !== "" && tdL.name.indexOf(name) === -1)
    return false;

  if (description !== "" && tdL.description.indexOf(description) === -1)
    return false;

  if (todoText !== "" && !haveToDoWithText(tdL.list, todoText))
    return false;

  return true;
}

export default function App() {
  const listAPI = useLists();
  const [ index, setIndex ] = useState(undefined);
  const [ menuIsVisible, setMenuIsVisible ] = useState(true);
  const [ filters, setFilters ] = useState({"name": "", "description": "", "todoText": ""});

  return (
    <>
      <Header
        iniciateCreation={() => setIndex(null)}
        menuIsVisible={menuIsVisible}
        changeMenuVisibility={() => setMenuIsVisible(isVisible => !isVisible)}
        filters={filters}
        changeFilters={setFilters}
      />
      <Main
        toDoLists={listAPI.GET().filter(list => filterToDoList(filters, list))}
        isNavBarVisible={menuIsVisible}
        setViewedList={i => setIndex(i)}
        toDoAPI={listAPI.useToDo}
      />
      {index !== undefined &&
        <CompleteToDoList
          toDoList={listAPI.GET_ONLY(index)}
          closeView={() => setIndex(undefined)}
          listAPI={listAPI}
          toDoAPI={listAPI.useToDo}
        />
      }
    </>
  )
}
