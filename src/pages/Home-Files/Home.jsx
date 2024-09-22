import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SingImg } from "../../components/sign.img";
import "./Home.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export const Home = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
  const history = useNavigate();

  //   console.log(inputValues);
  const getdata = (e) => {
    const { value, name } = e.target;

    setInputValues(() => {
      return {
        ...inputValues,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inputValues;

    if (name === "") {
      alert("Name field is requred");
    } else if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Wrong email format");
    } else if (date === "") {
      alert("Date of Birth field is required");
    } else if (password === "" || password.length < 6) {
      alert(`Password should be atleast 6 characters long`);
    } else {
      alert(`${name} your data has been added`);

      localStorage.setItem("userInfo", JSON.stringify([...data, inputValues]));

      setData((prevData) => prevData.push(inputValues));
      setInputValues({ name: "", email: "", date: "", password: "" });

      history("/login");
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section id="signUpSection" className="d-flex justify-content-between">
          <div className="left_data">
            <SingImg />
          </div>
          <div className="right_data  ">
            <h3 className="col-lg-6">Sign Up</h3>
            <Form id="signUpForm">
              <FloatingLabel
                className="mb-3 col-lg-8"
                controlId="floatingInput"
                label="Username">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Username"
                />
              </FloatingLabel>

              <FloatingLabel
                className="mb-3 col-lg-8"
                controlId="floatingInput"
                label="Email">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </FloatingLabel>

              <FloatingLabel
                className="mb-3 col-lg-8"
                controlId="formBasicEmail">
                <Form.Control type="date" name="date" onChange={getdata} />
              </FloatingLabel>

              <FloatingLabel
                className="mb-3 col-lg-8"
                controlId="formBasicPassword"
                label="Password">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </FloatingLabel>
              <p id="alreadyAcc" className="mt-3">
                Already Have an Account
                <span>
                  <NavLink to="/login"> SignIn</NavLink>
                </span>
              </p>
              <Button
                id="glow-on-hover"
                className="mb-3 col-lg-4"
                onClick={addData}
                style={{
                  background: " rgb(67, 185, 127)",
                  border: "none",
                }}
                variant="primary"
                type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
};
