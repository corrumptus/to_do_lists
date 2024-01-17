import '../../components_css/header/Header.css'
import MenuButton from './MenuButton.jsx'
import FilterDropDownMenu from './FilterDropDownMenu.jsx'

export default function Header({
  menuIsVisible,
  changeMenuVisibility,
  iniciateCreation,
  filters,
  changeFilters
}) {
  return (
    <header>
      <MenuButton menuIsVisible={menuIsVisible} click={changeMenuVisibility}/>
      <button onClick={iniciateCreation}>Novo</button>
      <div className="option-dropdown">
        <button>Procurar</button>
        <FilterDropDownMenu filters={filters} changeFilters={changeFilters}/>
      </div>
    </header>
  );
}