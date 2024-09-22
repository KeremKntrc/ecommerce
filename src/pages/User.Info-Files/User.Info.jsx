import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./User.Info.css";

export const UserInfo = () => {
  const [userData, setUserData] = useState({});
  const [isEdited, setIsEdited] = useState(false); // Edit durumunu tutan state

  useEffect(() => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setUserData(user[0]);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "date") {
      const dateValue = new Date(value);
      const year = dateValue.getFullYear();
      if (year.toString().length > 4) {
        alert("Year should have at most 4 digits.");
        return;
      }
    }
    if (name === "email" && value.indexOf("@") === -1) {
      alert("Email address must contain '@' symbol.");
      return;
    }
    setUserData({
      ...userData,
      [name]: value,
    });
    setIsEdited(true); // Herhangi bir input değiştiğinde edit durumunu true yap
  };

  const handleSave = () => {
    if (userData.password && userData.password.length < 6) {
      alert("Password must be more then 6 characters");
      return;
    }
    const updatedUser = { ...userData };
    localStorage.setItem("user_login", JSON.stringify([updatedUser]));
    localStorage.setItem("userInfo", JSON.stringify([updatedUser]));
    setIsEdited(false); // Kaydet düğmesine basıldığında edit durumunu false yap
  };

  return (
    <div className="d-flex justify-content-center align-items-center  overflow-hidden">
      <Card id="mainCardComp" className="col-md-3">
        <Card.Body id="cardBody">
          <div className="container">
            <h1>Edit Profile</h1>
            <Form className="d-blok">
              <Form.Group className="col-lg-12 mt-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="col-lg-12 mt-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="col-lg-12 mt-3" controlId="formDate">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={userData.date}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="col-lg-12 mt-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </div>
          <Button
            style={{ marginTop: "20px" }}
            onClick={handleSave}
            disabled={!isEdited}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
