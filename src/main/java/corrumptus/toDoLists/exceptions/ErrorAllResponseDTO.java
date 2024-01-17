package corrumptus.toDoLists.exceptions;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ErrorAllResponseDTO extends RuntimeException {
    private final String message;
    private final HttpStatus status;
}
