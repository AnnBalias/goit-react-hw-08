import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css"
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {

    const filteredData = useSelector(selectFilteredContacts)

    return (
        <ul className={css.contList}>
            {!filteredData.length ? <p>No suitable contacts</p> :
             filteredData.map((item) => (        
                <li key={item.id} className={css.contBox}>
                    <Contact {...item} />
                </li>
            ))}
        </ul>
    )
}

export default ContactList;