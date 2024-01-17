package corrumptus.toDoLists.model;

import java.util.ArrayList;
import java.util.List;

import corrumptus.toDoLists.DTO.todolist.ToDoListPostRequestDTO;
import corrumptus.toDoLists.DTO.todolist.ToDoListPutRequestDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "todolist")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = "name")
public class ToDoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;

    @OneToMany(mappedBy = "list")
    private List<ToDo> list;

    private ToDoList(String name, String description, List<ToDo> list) {
        this(null, name, description, list);
    }

    public ToDoList(ToDoListPostRequestDTO dto) {
        this(dto.name(), dto.description(), new ArrayList<>());
    }

    public void update(ToDoListPutRequestDTO dto) {
        name = dto.name();
        description = dto.description();
    }
}
