import { useSelector } from "react-redux";
import css from "./AppBar.module.css"
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    return (
        <header className={css.header}>
            {user.name && <p className={css.userEmail}>{user.email}</p>}
            <nav className={css.navBox}>
                <ul className={css.navList}>
                    <li className={css.homeItem}><Navigation /></li>
                    <li className={css.navItem}>
                        {isLoggedIn ? <UserMenu /> : <AuthNav />}
                    </li>
                </ul>
            </nav>
            
            
        </header>
    )
}

export default AppBar;