import './App.css';
import './styles/UseState.css';
import './styles/UseReducer.css';
import './styles/UseEffect.css';

import UseReducer from './components/UseReducer';
import UseState from './components/UseState';
import DiceRoll from './components/DiceRoll';
import UseEffect from './components/UseEffect';

const App = () => {

  return (
    <div className='hook-container'>
      <UseState />
      <UseReducer />
      <UseEffect />
      <DiceRoll />
    </div>
  );
}

export default App
