import { Fragment } from "react";

export default function NavBar({ toDoLists, isVisible }) {
  const style = {
    "width": isVisible ? "200px" : "0px",
    "padding": isVisible ? "0.5em" : "unset",
    "transition": "width 0.6s ease"
      + (isVisible ? "" : ", padding 0.1s cubic-bezier(0.62, 0.38, 1, 1) 0.5s")
  };

  const scrollTo = n => document.querySelector(".todolists").scrollLeft = 269*n;

  return (
    <nav style={style}>
      {toDoLists.map(
        ({ id, name }, i) =>
          <Fragment key={id}>
            <hr />
            <p onClick={() => scrollTo(i)}>{name}</p>
            {i === toDoLists.length - 1 && <hr />}
          </Fragment>
      )}
    </nav>
  );
}