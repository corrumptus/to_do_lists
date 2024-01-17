package corrumptus.toDoLists.DTO.todolist;

import jakarta.validation.constraints.NotBlank;

public record ToDoListPostRequestDTO(
    @NotBlank(message = "Name cannot be blank")
    String name,

    @NotBlank(message = "Description cannot be blank")
    String description
) {

}
