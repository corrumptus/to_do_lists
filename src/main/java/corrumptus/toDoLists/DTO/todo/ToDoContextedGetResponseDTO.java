package corrumptus.toDoLists.DTO.todo;

import corrumptus.toDoLists.model.ToDo;

public record ToDoContextedGetResponseDTO(Long id, String text, Long listId) {
    public ToDoContextedGetResponseDTO(ToDo toDo) {
        this(toDo.getId(), toDo.getText(), toDo.getList().getId());
    }
}