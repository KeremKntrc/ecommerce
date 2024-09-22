import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home-Files/Home";
import { Login } from "./pages/Login-Files/Login";
import { Routes, Route } from "react-router-dom";
import { UserInfo } from "./pages/User.Info-Files/User.Info";
import { Cart } from "./pages/Cart-Files/Cart";
import { Shop } from "./pages/Shop-Files/Shop";
import { ShopContextProvider } from "./context/Shop-Context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
