import '../../components_css/header/FilterDropDownMenu.css'

export default function FilterDropDownMenu({ filters, changeFilters }) {
  return (
    <div className="filter">
      <div>
        <label htmlFor="listName">Nome da Lista</label>
        <input
          id="listName"
          onChange={(e) => 
            changeFilters(prev => (
              {...prev, "name": e.target.value}
            ))
          }
          value={filters["name"]}
        />
      </div>
      <div>
        <label htmlFor="listDescription">Descrição da Lista</label>
        <input
          id="listDescription"
          onChange={(e) => 
            changeFilters(prev => (
              {...prev, "description": e.target.value}
            ))
          }
          value={filters["description"]}
        />
      </div>
      <div>
        <label htmlFor="todoText">Tarefa</label>
        <input
          id="todoText"
          onChange={(e) => 
            changeFilters(prev => (
              {...prev, "todoText": e.target.value}
            ))
          }
          value={filters["todoText"]}
        />
      </div>
    </div>
  );
}