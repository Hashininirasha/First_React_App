import logo from './logo.svg';
import './App.css';
import Greet  from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
function App() {
  return (
    <div className="App">
     <Greet  name='one' />
     <Greet  name='one-1' />
     <Welcome name='two'/>
     <Hello name='three'/>
    </div>
  );
}

export default App;
