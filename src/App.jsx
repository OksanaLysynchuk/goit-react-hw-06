import { useDispatch, useSelector } from "react-redux";
import { selectContacts, addContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice.js";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import "./App.css";
function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector((state) => state.filters.name);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleFilterChange = (filterValue) => {
    dispatch(changeFilter(filterValue));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={CSS.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox onFilter={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
