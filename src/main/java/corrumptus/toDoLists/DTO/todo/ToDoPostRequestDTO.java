package corrumptus.toDoLists.DTO.todo;

import jakarta.validation.constraints.NotBlank;

public record ToDoPostRequestDTO(
    @NotBlank(message = "Text cannot be blank")
    String text,

    Long listId
) {

}
