import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const buildLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
};

const Navigation = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <header className={css.header}>
            {user.name && <p>{user.email}</p>}
            <nav className={css.nav}>
                <ul className={css.navList}>
                    <li className={css.navLink}>
                        <NavLink to="" className={buildLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    {isLoggedIn &&
                        <>
                            <li>
                                <NavLink to="contacts" className={buildLinkClass}>
                                    Contacts
                                </NavLink>
                            </li>
                        </>
                    }
                    {!isLoggedIn &&
                        <>
                            <li>
                                <NavLink to="login" className={buildLinkClass}>
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="register" className={buildLinkClass}>
                                    Registration
                                </NavLink>
                            </li>
                        </>
                    }
                    {isLoggedIn && <button onClick={() => dispatch(logoutThunk())} className={css.logoutBtn}>Logout</button>}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;