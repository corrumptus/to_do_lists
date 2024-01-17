package corrumptus.toDoLists.API;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import corrumptus.toDoLists.DTO.todo.ToDoContextedGetResponseDTO;
import corrumptus.toDoLists.DTO.todo.ToDoGetResponseDTO;
import corrumptus.toDoLists.DTO.todo.ToDoPostRequestDTO;
import corrumptus.toDoLists.DTO.todo.ToDoPutRequestDTO;
import corrumptus.toDoLists.service.ToDoService;

/**
 * endpoint: /todo
 * 
 * GET all todo: /
 * GET all todo by list id: /list/{id}
 * GET list from todo: /{id}/list
 * 
 * POST todo: /
 * 
 * PUT todo: /{id}
 * 
 * DELETE todo: /{id}
 * DELETE all todo by list id: /list/{id}
*/

@RestController
@RequestMapping(value = "/todos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ToDoController {
    @Autowired
    private ToDoService toDoService;

    @GetMapping
    public ResponseEntity<List<ToDoContextedGetResponseDTO>> getAllToDo() {
        return ResponseEntity.ok(toDoService.getAllToDo());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ToDoContextedGetResponseDTO> getToDoById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(toDoService.getToDoById(id));
    }

    @PostMapping
    public ResponseEntity<ToDoGetResponseDTO> addToDo(
        @RequestBody ToDoPostRequestDTO toDoPostRequestDTO,
        UriComponentsBuilder uriBuilder
    ) {
        ToDoGetResponseDTO newToDo = toDoService.addToDo(toDoPostRequestDTO);

        URI uri = uriBuilder.path("/todos/{id}").buildAndExpand(newToDo.id()).toUri();

        return ResponseEntity.created(uri).body(newToDo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ToDoGetResponseDTO> modifyToDo(@RequestBody ToDoPutRequestDTO toDoPutRequestDTO) {
        return ResponseEntity.ok(toDoService.modifyToDo(toDoPutRequestDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteToDo(@PathVariable("id") Long id) {
        toDoService.deleteToDo(id);

        return ResponseEntity.noContent().build();
    }
}
