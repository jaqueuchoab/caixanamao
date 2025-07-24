import { Route, Routes } from 'react-router-dom';
import { registerRoutes } from '../../../routes/register-routes';
import ProgressIndicatorPassword from './ProgressIndicator/ProgressIndicatorPassword';

const SignUpMultiset = () => {
  return (
    <>
    <ProgressIndicatorPassword />
      <Routes>
        {registerRoutes.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
      </Routes>
    </>
  );
};

export default SignUpMultiset;
