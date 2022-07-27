import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import Shop from "./Shop";
import Login from "./Login";
import './App.css';

const RouteSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Shop />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};
const Home = () => {
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default RouteSwitch;