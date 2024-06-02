import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import CSS from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector((state) => state.filters?.name || "");
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li className={CSS.listitem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
