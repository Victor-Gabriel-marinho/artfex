import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/register' element={ <Register />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
