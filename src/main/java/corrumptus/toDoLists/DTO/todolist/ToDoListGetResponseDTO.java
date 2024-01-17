package corrumptus.toDoLists.DTO.todolist;

import java.util.List;
import java.util.stream.Collectors;

import corrumptus.toDoLists.DTO.todo.ToDoGetResponseDTO;
import corrumptus.toDoLists.model.ToDoList;

public record ToDoListGetResponseDTO(Long id, String name, String description, List<ToDoGetResponseDTO> list) {
    public ToDoListGetResponseDTO(ToDoList list) {
        this(
            list.getId(),
            list.getName(),
            list.getDescription(),
            list.getList()
                .stream()
                .map(ToDoGetResponseDTO::new)
                .collect(Collectors.toList())
        );
    }
}