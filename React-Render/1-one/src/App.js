import logo from './logo.svg';
import './App.css';
import UseState from './Components/UseState/UseState';
import UseReducer from './Components/UseReducer/UseReducer';
import ObjectUseState from './Components/Immutable State/ObjectUseState';
import { ArrayUseState } from './Components/Immutable State/ArrayUseState';
import { Parent } from './Components/Parent Child/Parent';
import ParentOne from './Components/Optimization/ParentOne';
import GrandParent from './Components/Optimization/GrandParent';
import ParentTwo from './Components/Optimization/ParentTwo';
import ParentThree from './Components/Incorrect Optimization/ParentThree';
import ParentFour from './Components/Incorrect Optimization/parentFour';
import ContextParent from './Components/Context/ContextParent';
import { ChildA } from './Components/Context/ContextChildren';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}

      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}

      {/* <Parent /> */}
      {/* <ParentOne /> */}
      {/* <GrandParent /> */}
    {/* <ParentTwo /> */}
    {/* <ParentThree /> */}
    {/* <ParentFour /> */}

    <ContextParent> 
      <ChildA />
    </ContextParent>
    </div>
  );
}

export default App;
