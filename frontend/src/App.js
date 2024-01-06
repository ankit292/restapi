
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './components/Signin';
import Contact from './components/Contact';
import ErrorOage from './components/ErrorOage';
function App() {
  return (
    < >
      <Router>
          <Navbar />

          <div className="container my-5">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/home"
                element={<Home  />}
              />
              <Route
                exact
                path="/about"
                element={<About  />}
              />
              <Route
                exact
                path="/contact"
                element={<Contact  />}
              />
              <Route
                exact
                path="/login"
                element={<Login  />}
              />
              <Route
                exact
                path="/signin"
                element={<Signin  />}
              />
              <Route path="*"  element={<ErrorOage />} />
            </Routes>
          </div>

        </Router>
    </>
  );
}

export default App;
