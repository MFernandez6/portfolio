import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from "./About";
import Projects from './Projects';
import Contact from './Contact.tsx';
import { Route, Link } from 'react-router-dom'
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
