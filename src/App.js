import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Router
import { Route } from "react-router-dom";

//Components
import Homepage from './Components/Homepage/Homepage';
import Aboutpage from './Components/Aboutpage/Aboutpage';
// import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';

function App() {
  return (
    <div className='app'>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/about" >
        <Aboutpage />
      </Route>
      <Route exact path="/education">
        <Education />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
