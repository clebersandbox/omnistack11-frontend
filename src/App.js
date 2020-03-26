import React /*, { useState }*/ from 'react';

import Routes from "./routes";

// import Header from './Header';
// import SubHeader from './SubHeader';

function App() {
  //array [ valor, funcaoDeAtualizacao ]
  // const [counter, setCounter] = useState(0);

  // function increment() {
  //   setCounter(counter + 1);
  //   //console.log(counter);
  // }

  return (
    <Routes></Routes>
    // <div>
    //   <Header />
    //   <SubHeader title="Semana OmniStack">11.0</SubHeader>
    //   <SubHeader>Contador: { counter }</SubHeader>
    //   <button onClick={ increment } >Incrementar</button>
    // </div>
  );
}

export default App;
