import { useDispatch } from "react-redux"
import css from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filters/slice";

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