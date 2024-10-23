import logo from './logo.svg';
import './App.css';
import UseState from './Components/UseState/UseState';
import UseReducer from './Components/UseReducer/UseReducer';
import ObjectUseState from './Components/Immutable State/ObjectUseState';
import { ArrayUseState } from './Components/Immutable State/ArrayUseState';
import { Parent } from './Components/Parent Child/Parent';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}

      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}

      <Parent />
    </div>
  );
}

export default App;
