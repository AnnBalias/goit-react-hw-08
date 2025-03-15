import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"
import clsx from "clsx";

const buildLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
};

const Navigation = () => {

    return (
        <NavLink to="" className={buildLinkClass}>
            Home
        </NavLink> 
    )
}

export default Navigation;