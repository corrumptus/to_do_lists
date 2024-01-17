import '../../components_css/todolist/ToDoList.css'
import ToDoList from './ToDoList';

export default function CompleteToDoList({mode, stopMode, id, name, description, list }) {
    return (
        <div>
            <ToDoList toDoList={[]}/>
        </div>
    );
}