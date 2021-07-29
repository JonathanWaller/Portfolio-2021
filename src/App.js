import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import Splash from './Splash/Splash';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Splash />
      {/* <About /> */}
      {/* <Landing /> */}
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
