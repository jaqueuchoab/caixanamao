import React from 'react';
import {
  LineIndicator,
  Progress,
  ProgressDot,
} from './ProgressIndicator.style';
import { useLocation } from 'react-router-dom';

const ProgressIndicatorPassword = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isCredentials = currentPath.includes('credentials');
	console.log(`Current path: ${currentPath}, isCredentials: ${isCredentials}`);
	

  return { isCredentials } ? (
    <Progress>
      <ProgressDot $active={true}>1</ProgressDot>
      <LineIndicator $active={true} />
      <ProgressDot $active={true}>2</ProgressDot>
			<p>Senha</p>
    </Progress>
  ) : (
		<Progress>
		<ProgressDot $active={true}>1</ProgressDot>
		<p>Identificação</p>
		<LineIndicator $active={false} />
		<ProgressDot $active={false}>2</ProgressDot>
	</Progress>
  );
};

export default ProgressIndicatorPassword;
