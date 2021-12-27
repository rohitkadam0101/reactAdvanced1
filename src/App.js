
import './App.css';
import FocusInput from './Components/FocusInput';
import FragmentDemo from './Components/FragementDemo';
import FRParentInput from './Components/FRParentInput';
import LifecycleA from './Components/LifecycleA';
import ParentComponent from './Components/ParentComponent';
import PureComp from './Components/PureComp';
import RefsDemo from './Components/RefsDemo';

function App() {
  return (
    <div className="App">
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <ParentComponent /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      <FRParentInput /> // To practice ForwardRef
    </div>
  );
}

export default App;
