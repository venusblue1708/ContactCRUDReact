import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../EditContact/EditContact.css";

function AddContact({ show, handleClose, handleAddContact }) {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  function handleAdd() {
    if (!name || !surName || !phoneNumber || !email) {
      alert("your inputs are empty");
      return;
    }

    let newObj = {
      name,
      surName,
      phoneNumber,
      email,
      id: Date.now(),
    };
    handleAddContact(newObj);
    setName("");
    setSurName("");
    setPhoneNumber("");
    setEmail("");
    handleClose();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#6d597a" }}>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="my-3"
              id="input"
              placeholder="Name"
              type="text"
            />
            <FormControl
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              className="my-3"
              id="input"
              placeholder="Surname"
              type="text"
            />
            <FormControl
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="my-3"
              id="input"
              placeholder="Phone-number"
              type="number"
            />
            <FormControl
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="my-3"
              id="input"
              placeholder="Email"
              type="email"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddContact;
