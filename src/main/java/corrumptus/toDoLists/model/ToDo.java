package corrumptus.toDoLists.model;

import corrumptus.toDoLists.DTO.todo.ToDoPostRequestDTO;
import corrumptus.toDoLists.DTO.todo.ToDoPutRequestDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "todo")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@ToString(of = "text")
public class ToDo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String text;

    @ManyToOne
    @JoinColumn(name = "list_id")
    private ToDoList list;

    private ToDo(String text, ToDoList list) {
        this(null, text, list);
    }

    public ToDo(ToDoPostRequestDTO dto, ToDoList list) {
        this(dto.text(), list);
    }

    public void update(ToDoPutRequestDTO dto) {
        text = dto.text();
    }
}
