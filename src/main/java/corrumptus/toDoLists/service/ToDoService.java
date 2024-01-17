package corrumptus.toDoLists.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import corrumptus.toDoLists.DTO.todo.ToDoContextedGetResponseDTO;
import corrumptus.toDoLists.DTO.todo.ToDoGetResponseDTO;
import corrumptus.toDoLists.DTO.todo.ToDoPostRequestDTO;
import corrumptus.toDoLists.DTO.todo.ToDoPutRequestDTO;
import corrumptus.toDoLists.dao.ToDoDAO;
import corrumptus.toDoLists.dao.ToDoListDAO;
import corrumptus.toDoLists.model.ToDo;
import corrumptus.toDoLists.model.ToDoList;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;

@Service
public class ToDoService {
    @Autowired
    private ToDoDAO toDoDAO;

    @Autowired
    private ToDoListDAO toDoListDAO;

    public List<ToDoContextedGetResponseDTO> getAllToDo() {
        return toDoDAO.findAll()
            .stream()
            .map(ToDoContextedGetResponseDTO::new)
            .collect(Collectors.toList());
    }

    public ToDoContextedGetResponseDTO getToDoById(Long id) {
        Optional<ToDo> toDo = toDoDAO.findById(id);

        if (toDo.isEmpty())
            throw new EntityNotFoundException("To Do not found: " + id);

        return new ToDoContextedGetResponseDTO(toDo.get());
    }

    public ToDoGetResponseDTO addToDo(@Valid ToDoPostRequestDTO dto) {
        Optional<ToDoList> list = toDoListDAO.findById(dto.listId());

        if (list.isEmpty())
            throw new EntityNotFoundException("List not found: " + dto.listId());

        ToDo newToDo = toDoDAO.save(new ToDo(dto, list.get()));

        return new ToDoGetResponseDTO(newToDo);
    }

    @Transactional
    public ToDoGetResponseDTO modifyToDo(@Valid ToDoPutRequestDTO dto) {
        Optional<ToDo> toDo = toDoDAO.findById(dto.id());

        if (toDo.isEmpty())
            throw new EntityNotFoundException("To Do not found: " + dto.id());

        ToDo toDoEntity = toDo.get();

        toDoEntity.update(dto);

        return new ToDoGetResponseDTO(toDoEntity);
    }

    public void deleteToDo(Long id) {
        toDoDAO.deleteById(id);
    }
}
