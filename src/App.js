import logo from './logo.svg';
import './App.css';
import Greet  from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Msg from './Components/Msg'
function App() {
  return (
    <div className="App">
     <Greet  name='one' heroname='batman'>
       <h1>This is Childern props</h1>
     </Greet>
     <Greet  name='one-1' heroname='superman' >
       <button>Action</button>
      </Greet>
     <Welcome name='two' food='pizza'/>
     <Hello name='three'/>
     <Msg />
    </div>
  );
}

export default App;
