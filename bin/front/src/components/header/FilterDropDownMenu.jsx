import '../../components_css/header/FilterDropDownMenu.css'

export default function FilterDropDownMenu({references}) {
    return (
        <div className="filter">
            <div>
                <label htmlFor="listName">Nome da Lista</label>
                <input type="text" id="listName" ref={references["listNameFilter"]}/>
            </div>
            <div>
                <label htmlFor="listDescription">Descrição da Lista</label>
                <input type="text" id="listDescription" ref={references["listDescriptionFilter"]}/>
            </div>
            <div>
                <label htmlFor="todoText">Tarefa</label>
                <input type="text" id="todoText" ref={references["todoText"]}/>
            </div>
        </div>
    );
}