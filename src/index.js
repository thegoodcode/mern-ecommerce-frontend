import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap.min.css'
import './index.scss'
import App from './App'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
)
