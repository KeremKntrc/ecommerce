import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import { GrLogout } from "react-icons/gr";
import { IoMdCart } from "react-icons/io";
import { FaShopify } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import "./Header.css";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getuser = localStorage.getItem("user_login");
    if (getuser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location.pathname]); // Sayfa her yenilendiğinde useEffect tekrar çalışacak

  const handleLogin = () => {
    setIsLoggedIn(true);
    history("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("user_login");
    history("/login");
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/shop" id="homeButton">
            Home
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* {isLoggedIn && <Nav.Link href="#features">Features</Nav.Link>} */}
        </Nav>
        {/* Giriş yapılmadığında 'Login' bileşenine erişim sağlayan buton */}
        <div className="links">
          <Link to="/shop">
            <FaShopify />
          </Link>
          {isLoggedIn && (
            <Link to="/cart">
              <IoMdCart />
            </Link>
          )}
          {isLoggedIn &&
            location.pathname !== "/login" &&
            location.pathname !== "/" && (
              <Link to="/userinfo">
                <FaUser />
              </Link>
            )}
          {isLoggedIn &&
            location.pathname !== "/login" &&
            location.pathname !== "/" && (
              <Button id="logoutIcon" onClick={handleLogout}>
                <GrLogout />
              </Button>
            )}
          {!isLoggedIn && location.pathname !== "/login" && (
            <Button variant="outline-light" onClick={handleLogin}>
              Login
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};
