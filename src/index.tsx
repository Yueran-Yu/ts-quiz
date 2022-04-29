import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {ErrorBoundary} from './ErrorBoundary';
import {GlobalStyle} from './global.styles';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle/>
		<ErrorBoundary>
			<App/>
		</ErrorBoundary>
	</React.StrictMode>, document.getElementById('root') as HTMLElement
);
