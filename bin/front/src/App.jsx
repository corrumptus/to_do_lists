import { useRef, useState } from 'react'
import Header from './components/header/Header.jsx'
import Content from './components/content/Content.jsx'
import CompleteToDoList from './components/todolist/CompleteToDoList.jsx'
import './App.css'

export default function App() {
  const [ completeListIsVisible, setCompleteListIsVisible ] = useState(false);
  const [ mode, setMode ] = useState("");
  const [ menuIsVisible, setMenuIsVisible ] = useState(true);
  const [ listNameFilter, listDescriptionFilter, todoTextFilter ] = [ useRef(), useRef(), useRef() ]

  return (
    <>
      <Header
        iniciateCreation={() => setCompleteListIsVisible(true)}
        changeMode={() => setMode("new")}
        menuIsVisible={menuIsVisible}
        changeMenuVisibility={() => setMenuIsVisible(isVisible => !isVisible)}
        filterRefs={
          {
            "listName": listNameFilter,
            "listDescription": listDescriptionFilter,
            "todoText": todoTextFilter
          }
        }
      />
      <Content
        iniciateCompleteView={() => setCompleteListIsVisible(true)}
        changeMode={() => setMode("view")}
        menuIsVisible={menuIsVisible}
        filters={
          {
            "listName": listNameFilter.current,
            "listDescription": listDescriptionFilter.current,
            "todoText": todoTextFilter.current
          }
        }
      />
      {
        completeListIsVisible &&
        <CompleteToDoList
          mode={mode}
          stopMode={() => setCompleteListIsVisible(false)}
        />
      }
    </>
  )
}
