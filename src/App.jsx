import React from 'react';
import { Route, Routes } from 'react-router';

//Pages
import Main from './pages/main';
import Detail from './pages/detail';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={(
      <Main />
    )} />
    <Route path='/:id' element={(
      <Detail />
    )} />
   </Routes>
  )
}

export default App;