import './App.css';
import './styles/UseState.css';
import './styles/UseReducer.css';
import './styles/UseEffect.css';
import './styles/UseRef.css';
import './styles/UseLayoutEffect.css';
import './styles/UseImperativeHandle.css';
import './styles/UseContext.css';
import './styles/UseMemo.css';

import UseReducer from './components/UseReducer';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import { UseLayoutEffect } from './components/UseLayoutEffect';
import UseImperativeHandle from './components/UseImperativeHandle';
import UseContext from './components/UseContext';
import UseMemo from './components/UseMemo';

const App = () => {

  return (
    <div className='hook-container'>
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <UseImperativeHandle />
      <UseContext />
      <UseMemo />
    </div>
  );
}

export default App
