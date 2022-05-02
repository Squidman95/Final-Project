import logo from './logo.svg';
import './App.css';
import ExampleComponent from './Components/Examples/ExampleComp';

function App() {
  return (
    <div className="App">
      <ExampleComponent
      prop1 = "This is prop1"
      prop2 = "This is prop2"
      />
    </div>
  );
}

export default App;
