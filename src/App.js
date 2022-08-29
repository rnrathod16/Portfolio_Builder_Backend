import { createContext } from 'react';
import { useState } from 'react';
import './App.css';
import MultiStep from './components/MultiStep';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Portfolio from './components/Portfolio';
import Error from './components/Error';

export const newContext = createContext();

function App() {
  const [cstep, setcstep] = useState(0);
  const [data, setdata] = useState([]);
  const [local, setlocal] = useState({
    token: null,
    id: null
  })


  return (
    <>
      <newContext.Provider value={{ setcstep, setdata, data, setlocal }}>
        <Routes>
          <Route exact path="/form" element={local.id === null ? <Signin /> : <MultiStep cstep={cstep} />} />
          <Route exact path="/portfolio" element={local.id === null ? <Signin /> : <Portfolio />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/" element={<Signup />} />

        </Routes>
      </newContext.Provider>
    </>
  );
}

export default App;
