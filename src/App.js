import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';




//primero creo las carpetas de components y container

function App() {
  return (
    <>
      <ItemListContainer />
      <h1>Rick y Morty Burgers</h1>
      <NavBar />
    </>
  );
}

export default App;
