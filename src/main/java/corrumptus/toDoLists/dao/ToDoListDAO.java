package corrumptus.toDoLists.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import corrumptus.toDoLists.model.ToDoList;

public interface ToDoListDAO extends JpaRepository<ToDoList, Long> {
    @Query("SELECT tdl FROM ToDoList tdl WHERE :id MEMBER OF tdl.list")
    ToDoList findListByToDoId(Long id);
}