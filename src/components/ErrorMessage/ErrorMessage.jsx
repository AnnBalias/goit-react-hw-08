import { NavLink } from "react-router-dom";
import { IconContext } from 'react-icons';
import { PiSmileySadThin } from "react-icons/pi";
import css from "./ErrorMessage.module.css"

const ErrorMessage = () => {
    return (
        <div className={css.errorBox}>
            <IconContext.Provider value={{size: "160px", color: "rgb(20, 20, 20)"}}>
                <PiSmileySadThin />
            </IconContext.Provider>
            <p className={css.errorMessage}>
            <span  className={css.errorSpan}>oops!</span>
            Don`t worry, try again later
            </p>
            <NavLink to='/' className={css.btn}>
                Back home
            </NavLink>
        </div>
    )
}

export default ErrorMessage;