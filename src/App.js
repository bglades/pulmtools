
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Calculator from "./pages/calculator/Calculator";
import Home from "./pages/home/Home";
import MyDay from "./pages/myDay/MyDay";
import Resources from "./pages/resources/Resources";
import Rounds from "./pages/rounds/Rounds";

function App() {
return(
  <>
  <Router>
  <Navbar />
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/myDay'>
      <MyDay />
    </Route>
    <Route path='/calculator'>
      <Calculator />
    </Route>
    <Route path='/rounds'>
      <Rounds />
    </Route>
    <Route path='/resources'>
      <Resources />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
  </Switch>
  </Router>
  </>
)
}

export default App;
