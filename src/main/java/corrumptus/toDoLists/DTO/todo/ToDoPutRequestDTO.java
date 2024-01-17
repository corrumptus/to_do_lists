package corrumptus.toDoLists.DTO.todo;

import jakarta.validation.constraints.NotBlank;

public record ToDoPutRequestDTO(
    Long id,

    @NotBlank(message = "Text cannot be blank")
    String text
) {

}
