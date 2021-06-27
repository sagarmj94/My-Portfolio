import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
     <NavBar/>
     <Home/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;
