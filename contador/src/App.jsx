import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [globalCount, setGlobalCount] = useState(0);

  return (
    <>
      <h1>Contador Individual</h1>
      <Contador />
      <Contador />
      <Contador />
      <Contador />
      <Contador />
      <Contador />

      <h1>Contador Global</h1>
      <ContadorGlobal count={globalCount} setCount={setGlobalCount}/>
      <ContadorGlobal count={globalCount} setCount={setGlobalCount}/>
      <ContadorGlobal count={globalCount} setCount={setGlobalCount}/>
    </>
  );
}


function Contador() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Incrementa o contador ao clicar no botão */}
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </>
  );
}

function ContadorGlobal({ count, setCount }){
  return (
    <>
      {/* Incrementa o contador ao clicar no botão */}
      <button onClick={() => setCount(count + 1)}>
        Contador global: {count}
      </button>
    </>
  );
}



export default App;
