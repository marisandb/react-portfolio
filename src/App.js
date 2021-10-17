import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div>
      <Nav>
      </Nav>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
