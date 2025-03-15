import { useSelector } from "react-redux";
import css from "./AuthNav.module.css"
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const buildLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
};

const AuthNav = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return !isLoggedIn && (
        <ul className={css.registrNav}>
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
        </ul>    
    )
}

export default AuthNav;