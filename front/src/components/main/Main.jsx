import { useRef, memo } from "react";
import SimpleToDoList from "../todolist/SimpleToDoList";
import NavBar from "./NavBar";
import '../../components_css/main/Main.css';

const Main = memo(({ toDoLists, isNavBarVisible, setViewedList, toDoAPI }) => {
  const isPressed = useRef(false);
  const startX = useRef();
  const scrollLeft = useRef();

  function onMouseDown({ pageX, target}) {
    isPressed.current = true;

    startX.current = pageX - target.offsetLeft;

    scrollLeft.current = target.scrollLeft;
  }

  function onMouseMove(event) {
    if (!isPressed.current) return;

    event.preventDefault();

    const currentX = event.pageX - event.target.offsetLeft;

    const walk = (currentX - startX.current) * 1.5;

    event.target.scrollLeft = scrollLeft.current - walk;
  }

  if (toDoLists === null)
    return (
      <main>
        <NavBar toDoLists={[]} isVisible={isNavBarVisible}/>
        <div className="todolists"></div>
      </main>
    );

  return (
    <main>
      <NavBar toDoLists={toDoLists} isVisible={isNavBarVisible}/>
      <div
        className="todolists"
        onMouseLeave={() => isPressed.current = false}
        onMouseUp={() => isPressed.current = false}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
      >
        {toDoLists.map((tdl, i) =>
          <SimpleToDoList
            key={JSON.stringify(tdl)}
            toDoList={tdl}
            visualize={() => setViewedList(i)}
            toDoAPI={toDoAPI}
          />
        )}
      </div>
    </main>
  );
}, (prevProps, newProps) => {
  if (JSON.stringify(prevProps.toDoLists) !== JSON.stringify(newProps.toDoLists))
    return false;

  if (prevProps.isNavBarVisible !== newProps.isNavBarVisible)
    return false;

  return true;
});

export default Main;