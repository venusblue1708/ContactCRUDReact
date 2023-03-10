import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ContactCard.css";

function ContactCard({ item, handleDelete, handleEdit }) {
  return (
    <Card className="card" style={{ width: "18rem", marginBottom: "40px" }}>
      <Card.Body>
        <h5
          style={{
            fontFamily: "cursive",
            margin: "20px",
            color: "#240046",
          }}
        >
          Info about person
        </h5>
        <Card.Title className="title">{item.name}</Card.Title>
        <Card.Title className="title">{item.surName}</Card.Title>
        <Card.Link className="href" href="#">
          Email: {item.email}
        </Card.Link>
        <br />
        <Card.Link className="href" href="#">
          Phone-number:{item.phoneNumber}
        </Card.Link>
        <br />
        <Button
          id="btn_card"
          style={{
            backgroundColor: "#43aa8b",
            marginTop: "10px",
            border: "none",
          }}
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </Button>
        <Button
          id="btn_card"
          style={{
            backgroundColor: "#43aa8b",
            marginTop: "10px",
            marginLeft: "7px",
            border: "none",
          }}
          onClick={() => handleEdit(item.id)}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
