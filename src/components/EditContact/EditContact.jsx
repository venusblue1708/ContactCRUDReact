import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./EditContact.css";

function EditContact({
  handleEditClose,
  showEditModal,
  editContact,
  handleSave,
}) {
  const [contactToEdit, setContactToEdit] = useState(editContact);
  console.log(editContact);
  useEffect(() => {
    setContactToEdit(editContact);
  }, [editContact]);

  const editName = (e) => {
    let newObj = {
      ...contactToEdit,
      name: e.target.value,
    };
    setContactToEdit(newObj);
  };
  const editSurName = (e) => {
    let newObj = {
      ...contactToEdit,
      surName: e.target.value,
    };
    setContactToEdit(newObj);
  };
  const editPhoneNumber = (e) => {
    let newObj = {
      ...contactToEdit,
      phoneNumber: e.target.value,
    };
    setContactToEdit(newObj);
  };
  const editEmail = (e) => {
    let newObj = {
      ...contactToEdit,
      email: e.target.value,
    };
    setContactToEdit(newObj);
  };
  console.log(contactToEdit);
  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#2978a0" }}>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={contactToEdit.name}
              onChange={editName}
              className="my-3"
              id="input"
              type="text"
            />
            <FormControl
              value={contactToEdit.surName}
              onChange={editSurName}
              className="my-3"
              id="input"
              type="text"
            />
            <FormControl
              value={contactToEdit.phoneNumber}
              onChange={editPhoneNumber}
              className="my-3"
              id="input"
              type="number"
            />
            <FormControl
              value={contactToEdit.email}
              onChange={editEmail}
              className="my-3"
              id="input"
              type="email"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => handleSave(contactToEdit)}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditContact;
