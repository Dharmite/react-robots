import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error, info) {
        console.error({ error, info });
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops! Something went wrong</h1>;
        }

        return this.props.children;
    }
}
