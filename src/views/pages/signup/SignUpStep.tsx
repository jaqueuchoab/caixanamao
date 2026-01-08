import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Identification from './Identification';
import Credentials from './Credentials';
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator';

const SignUpMultiset = () => {
	return (
		<>
			<ProgressIndicator />
			<Routes>
				<Route path='/' element={<Identification />}></Route>
				<Route path='/credentials' element={<Credentials />}></Route>
			</Routes>
		</>
	);
};

export default SignUpMultiset;
