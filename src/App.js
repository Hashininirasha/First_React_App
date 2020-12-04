import logo from './logo.svg';
import './App.css';
import Greet  from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
function App() {
  return (
    <div className="App">
     <Greet />
     <Welcome/>
     <Hello />
    </div>
  );
}

export default App;
