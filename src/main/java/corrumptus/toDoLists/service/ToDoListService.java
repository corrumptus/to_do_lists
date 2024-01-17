package corrumptus.toDoLists.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import corrumptus.toDoLists.DTO.todolist.ToDoListGetResponseDTO;
import corrumptus.toDoLists.DTO.todolist.ToDoListPostRequestDTO;
import corrumptus.toDoLists.DTO.todolist.ToDoListPutRequestDTO;
import corrumptus.toDoLists.dao.ToDoDAO;
import corrumptus.toDoLists.dao.ToDoListDAO;
import corrumptus.toDoLists.model.ToDoList;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;

@Service
public class ToDoListService {
    @Autowired
    private ToDoListDAO toDoListDAO;

    @Autowired
    private ToDoDAO toDoDAO;

    public List<ToDoListGetResponseDTO> getAllToDoList() {
        return toDoListDAO.findAll()
            .stream()
            .map(ToDoListGetResponseDTO::new)
            .collect(Collectors.toList());
    }

    public ToDoListGetResponseDTO getToDoListById(long id) {
        Optional<ToDoList> list = toDoListDAO.findById(id);

        if (list.isEmpty())
            throw new EntityNotFoundException("List not found: " + id);

        return new ToDoListGetResponseDTO(list.get());
    }

    public ToDoListGetResponseDTO addToDoList(@Valid ToDoListPostRequestDTO dto) {
        ToDoList newToDoList = toDoListDAO.save(new ToDoList(dto));

        return new ToDoListGetResponseDTO(newToDoList);
    }

    @Transactional
    public ToDoListGetResponseDTO modifyToDoList(@Valid ToDoListPutRequestDTO dto) {
        Optional<ToDoList> list = toDoListDAO.findById(dto.id());

        if (list.isEmpty())
            throw new EntityNotFoundException("List not found: " + dto.id());

        ToDoList listEntity = list.get();

        listEntity.update(dto);

        return new ToDoListGetResponseDTO(listEntity);
    }

    public void deleteToDoList(Long id) {
        Optional<ToDoList> list = toDoListDAO.findById(id);

        if (list.isEmpty())
            throw new EntityNotFoundException("List not found: " + id);

        toDoDAO.deleteAll(list.get().getList());
        toDoListDAO.deleteById(id);
    }
}