package corrumptus.toDoLists.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import jakarta.persistence.EntityNotFoundException;

@ControllerAdvice
public class ExceptionHandlerService {
    @ExceptionHandler(value = EntityNotFoundException.class)
    public ResponseEntity<ErrorAllResponseDTO> handleEntityNotFound(EntityNotFoundException e) {
        HttpStatus status = HttpStatus.NOT_FOUND;

        ErrorAllResponseDTO err = new ErrorAllResponseDTO(
            e.getMessage(),
            status
        );

        return new ResponseEntity<>(err, status);
    }

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorWithAnotherErrorsAllResponseDTO> handleArgumentNotValid(MethodArgumentNotValidException e) {
        HttpStatus status = HttpStatus.BAD_REQUEST;

        ErrorWithAnotherErrorsAllResponseDTO err = new ErrorWithAnotherErrorsAllResponseDTO(
            e.getMessage(),
            e.getAllErrors(),
            status
        );

        return new ResponseEntity<>(err, status);
    }

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<ErrorAllResponseDTO> handleEntityNotFound(Exception e) {
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        ErrorAllResponseDTO err = new ErrorAllResponseDTO(
            e.getMessage(),
            status
        );

        return new ResponseEntity<>(err, status);
    }
}
