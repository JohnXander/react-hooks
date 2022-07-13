import './App.css';
import './styles/UseState.css';
import './styles/UseReducer.css';

import UseReducer from './components/UseReducer';
import UseState from './components/UseState';

const App = () => {

  return (
    <div className='hook-container'>
      <UseState />
      <UseReducer />
    </div>
  );
}

export default App
