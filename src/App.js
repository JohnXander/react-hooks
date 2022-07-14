import './App.css';
import './styles/UseState.css';
import './styles/UseReducer.css';
import './styles/UseEffect.css';
import './styles/UseRef.css';

import UseReducer from './components/UseReducer';
import UseState from './components/UseState';
import DiceRoll from './components/DiceRoll';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';

const App = () => {

  return (
    <div className='hook-container'>
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <DiceRoll />
    </div>
  );
}

export default App
