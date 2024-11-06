import './App.css';
import IncrementButtons from './IncrementBtns';
import GenerateFormulario from './Formulario';
import Visibilidad from './Visibilidad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IncrementButtons/>
        <GenerateFormulario/>
        <Visibilidad/>
      </header>
    </div>
  );
}

export default App;
