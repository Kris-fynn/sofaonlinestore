import Furniture from './components/furniture';
import Nav from './components/nav';
import './App.css';
import './components/nav.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>,
        <Furniture/>
      </header>
    </div>
  );
}

export default App;
