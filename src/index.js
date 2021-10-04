import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap.min.css'
import './index.scss'
import App from './App'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import { Provider } from 'react-redux'
import store from 'store'

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<Provider store={store}>
				<App />
			</Provider>
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
)
