import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css"
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const buildLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
};

const UserMenu = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    
    return isLoggedIn && (
        <div className={css.userNav}>
            <NavLink to="contacts" className={buildLinkClass}>
                Contacts
            </NavLink>
            {isLoggedIn && <button onClick={() => dispatch(logoutThunk())} className={css.logoutBtn}>Logout</button>}
        </div>       
    )
}

export default UserMenu;