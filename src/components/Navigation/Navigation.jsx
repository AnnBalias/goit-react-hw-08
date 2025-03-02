import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"
import clsx from "clsx";

const buildLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
};

const Navigation = () => {

    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <ul className={css.navList}>
                    <li className={css.navLink}>
                        <NavLink to="" className={buildLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="register" className={buildLinkClass}>
                            Registration
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="login" className={buildLinkClass}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="contacts" className={buildLinkClass}>
                            Contacts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="*" className={buildLinkClass}>
                            NotFound
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;