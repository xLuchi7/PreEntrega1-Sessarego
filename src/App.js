import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
