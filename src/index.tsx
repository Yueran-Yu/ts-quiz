import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {ErrorBoundary} from './ErrorBoundary';
import {GlobalStyle} from './global.styles';
import {RowsProvider} from "./context/rowContext";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle/>
		<RowsProvider>
			<ErrorBoundary>
				<App/>
			</ErrorBoundary>
		</RowsProvider>
	</React.StrictMode>, document.getElementById('root') as HTMLElement
);
