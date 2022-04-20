import logoqori from './logo_qori.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  let styles = {
    backgroundColor: "#88d"
  }
  return (  
    <div className="App">
      <Navbar/>
      <header style={styles} className="App-header">
        <img src={logoqori} alt="logoqori" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="container-fluid border border-primary border-5">
          comprobando que bootstrap está funcionando. deberia tener un borde ancho
        </div>

      </header>
      <h1>Todos los derechos reservados</h1>
    </div>
  );
}

export default App;
