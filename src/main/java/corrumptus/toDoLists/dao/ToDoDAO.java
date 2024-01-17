package corrumptus.toDoLists.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import corrumptus.toDoLists.model.ToDo;

public interface ToDoDAO extends JpaRepository<ToDo, Long> {

}
