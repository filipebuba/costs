import {BrowserRouter as Router, Route,  Routes, Link} from 'react-router-dom';
import NewProject from './components/pages/NewProject';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company'
import Container from './components/layaut/Container';

function App() {
  return (
<Router>
  <div>
    <Link to="/">Home</Link>
    <Link to="/company">Company</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/newproject">NewProject</Link>
    
  </div>
  <Container>
  <Routes>
      <Route exact path="/" element={<Home />}  />
      <Route exact path="/company" element={<Company />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/newproject" element={<NewProject/>} />
  </Routes>
  </Container>
</Router>
  );
}

export default App;
