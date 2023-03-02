
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import MyDay from "./pages/myDay/MyDay";

function App() {
return(
  <>
  <Router>
  <Navbar />
  <Home />
  <MyDay />
  </Router>
  </>
)
}

export default App;
