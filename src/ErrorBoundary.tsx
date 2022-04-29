import React, {Component, ErrorInfo} from 'react'

interface Props {
	children: JSX.Element
}

interface State {
	hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {hasError: false}
	}

	static getDerivedStateFromError(_: Error): State {
		return {hasError: true}
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Sorry... there was an error</h1>
		}
		return this.props.children
	}
}
