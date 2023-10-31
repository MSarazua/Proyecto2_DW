import logo from './logo.svg';
import './App.css';
import RegistroUsuarios from './components/RegistroUsuarios/RegistroUsuarios '; // Importa tu componente de registro
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<RegistroUsuarios/>} />
    </Routes>
  );
}

export default App;
