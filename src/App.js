import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [contacts, setContacts] = useState([]);
  function handleAddContact(newObj) {
    let newContact = [...contacts];
    newContact.push(newObj);
    setContacts(newContact);
  }

  console.log(contacts);
  function handleDelete(id) {
    let newContact = contacts.filter((item) => item.id !== id);
    setContacts(newContact);
  }

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [editContact, setEditContact] = useState({});

  function handleEdit(id) {
    let obj = contacts.filter((item) => item.id == id);
    setEditContact(obj[0]);
    handleEditShow();
  }
  function handleSave(editedObj) {
    let newContact = contacts.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      }
      return item;
    });
    setContacts(newContact);
    setShowEditModal(false);
  }
  return (
    <div>
      <Header handleShow={handleShow} />
      <AddContact
        handleAddContact={handleAddContact}
        show={show}
        handleClose={handleClose}
      />
      <ContactList
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        contacts={contacts}
      />

      <EditContact
        showEditModal={showEditModal}
        handleEditClose={handleEditClose}
        editContact={editContact}
        handleSave={handleSave}
      />
    </div>
  );
};

export default App;
