import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProgressIndicator from './ProgressIndicator/ProgressIndicator';
import Identification from './Identification';
import Credentials from './Credentials';


const SignUpMultiset = () => {
  
  return (
    <>
    <ProgressIndicator />
      <Routes>
        <Route path='/' element={<Identification/>}></Route>
        <Route path='/creadentials' element={<Credentials/>}></Route>
      </Routes>
    </>
  );
};

export default SignUpMultiset;
