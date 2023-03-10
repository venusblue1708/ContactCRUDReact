import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactList.css";
const ContactList = ({ contacts, handleDelete, handleEdit }) => {
  return (
    <div>
      <center
        text="Contacts"
        hover-text="Cholpon"
        style={{
          fontSize: "30px",
          fontFamily: "cursive",
          margin: "20px",
          color: "#6a4c93",
        }}
      ></center>
      <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        {contacts.map((item) => (
          <ContactCard
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
