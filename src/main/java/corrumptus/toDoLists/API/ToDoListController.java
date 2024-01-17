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

import corrumptus.toDoLists.DTO.todolist.ToDoListGetResponseDTO;
import corrumptus.toDoLists.DTO.todolist.ToDoListPostRequestDTO;
import corrumptus.toDoLists.DTO.todolist.ToDoListPutRequestDTO;
import corrumptus.toDoLists.service.ToDoListService;

/*
 * endpoint: /lists
 * 
 * GET all lists: /
 * GET especific list: /{id}
 * GET all todo from list: /{id}/todo
 * 
 * POST list: /
 * 
 * PUT list: /{id}
 * 
 * DELETE list: /{id}
*/
@RestController
@RequestMapping(value = "/lists")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ToDoListController {
    @Autowired
    private ToDoListService listService;

    @GetMapping
    public ResponseEntity<List<ToDoListGetResponseDTO>> getAllToDoList() {
        return ResponseEntity.ok(listService.getAllToDoList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ToDoListGetResponseDTO> getToDoListById(@PathVariable("id") long id) {
        return ResponseEntity.ok(listService.getToDoListById(id));
    }

    @PostMapping
    public ResponseEntity<ToDoListGetResponseDTO> addToDoList(
        @RequestBody ToDoListPostRequestDTO toDoListDTO,
        UriComponentsBuilder uriBuilder
    ) {
        ToDoListGetResponseDTO newToDoList = listService.addToDoList(toDoListDTO);
        
        URI uri = uriBuilder.path("/lists/{id}").buildAndExpand(newToDoList.id()).toUri();

        return ResponseEntity.created(uri).body(newToDoList);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ToDoListGetResponseDTO> modifyToDoList(
        @RequestBody ToDoListPutRequestDTO toDoListDTO
    ) {
        return ResponseEntity.ok(listService.modifyToDoList(toDoListDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteToDoList(@PathVariable("id") Long id) {
        listService.deleteToDoList(id);

        return ResponseEntity.noContent().build();
    }
}
