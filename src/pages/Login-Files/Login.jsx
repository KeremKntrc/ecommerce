import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { SingImg } from "../../components/sign.img";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { NavLink } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export const Login = () => {
  const history = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  // const [data, setData] = useState([]);

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

    const getUserArr = localStorage.getItem("userInfo");
    // console.log(getUserArr);

    const { email, password } = inputValues;

    if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Wrong email format");
    } else if (password === "" || password.length < 6) {
      alert(`Password should be atleast 6 characters long`);
    } else {
      if (getUserArr && getUserArr.length) {
        const userdata = JSON.parse(getUserArr);
        const userLogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login seccesful");

          localStorage.setItem("user_login", JSON.stringify(userLogin));

          history("/shop");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section id="signUpSection" className="d-flex justify-content-between">
          <div className="left_data">
            <SingImg />
          </div>
          <div className="right_data  p-3">
            <h3 className="col-lg-6">Log In</h3>
            <Form id="signUpForm2">
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
                controlId="floatingPassword"
                label="Password">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </FloatingLabel>
              <p id="alreadyAcc" className="mt-3">
                Create New Account
                <span>
                  <NavLink to="/"> Sign Up</NavLink>
                </span>
              </p>
              <Button
                id="glow-on-hover"
                className="mb-3 col-lg-4"
                onClick={addData}
                style={{
                  background: " rgb(67, 185, 127)",
                  border: "none",
                  marginTop: "106px",
                  marginRight: "34px",
                }}
                variant="primary"
                type="submit">
                Log In
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
};
