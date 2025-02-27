import { useDispatch } from "react-redux"
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css"

const SearchBox = () => {

    const dispatch = useDispatch();

    return (
        <div className={css.searchBox}>
            <label htmlFor="search">
                Find contacts by name
            </label>
            <input
                type="text"
                name="search" 
                id="search"
                className={css.searchInput}
                onChange={(event) => dispatch(changeFilter(event.target.value))}
            />
        </div>
    )
}

export default SearchBox;