import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Catalog from "./pages/Home/catalog";
import About from "./pages/Home/about";
import { Userprovider } from "./context";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/cart";

import Footer from "./components/Footer";
// Pages
function App() {
  return (
    <div className="App">
      <Userprovider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
      </Userprovider>
    </div>
  );
}
export default App;
