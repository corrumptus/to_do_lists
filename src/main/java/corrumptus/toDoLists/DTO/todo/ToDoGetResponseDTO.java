package corrumptus.toDoLists.DTO.todo;

import corrumptus.toDoLists.model.ToDo;

public record ToDoGetResponseDTO(Long id, String text) {
    public ToDoGetResponseDTO(Long id, String text) {
        this.id = id;
        this.text = text;
    }

    public ToDoGetResponseDTO(ToDo todo) {
        this(todo.getId(), todo.getText());
    }
}