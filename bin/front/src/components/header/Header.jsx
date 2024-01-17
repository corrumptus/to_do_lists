import '../../components_css/header/Header.css'
import MenuButton from './MenuButton.jsx'
import FilterDropDownMenu from './FilterDropDownMenu.jsx'

export default function Header({ iniciateCreation, changeMode, menuIsVisible, changeMenuVisibility, filterRefs }) {
    return (
        <header>
            <MenuButton menuIsVisible={menuIsVisible} click={changeMenuVisibility}/>
            <button onClick={() => {iniciateCreation(); changeMode();}}>Novo</button>
            <div className="option-dropdown">
                <button>Procurar</button>
                <FilterDropDownMenu references={filterRefs}/>
            </div>
        </header>
    );
}