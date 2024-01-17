package corrumptus.toDoLists.exceptions;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.ObjectError;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ErrorWithAnotherErrorsAllResponseDTO extends RuntimeException {
    private final String message;
    private final List<ObjectError> errors;
    private final HttpStatus status;
}
