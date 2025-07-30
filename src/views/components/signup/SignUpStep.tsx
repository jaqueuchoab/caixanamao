import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { registerRoutes } from '../../../routes/register-routes';
import ProgressIndicator from './ProgressIndicator/ProgressIndicator';


const SignUpMultiset = () => {
  
  return (
    <>
    <ProgressIndicator />
      <Routes>
        {registerRoutes.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
      </Routes>
    </>
  );
};

export default SignUpMultiset;
