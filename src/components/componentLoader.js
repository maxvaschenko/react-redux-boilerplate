import React from 'react';

export default (loader) => (
    class componentLoader extends React.Component {
        constructor(props) {
            super(props);

            this.state = { Component: null };
        }

        componentWillMount() {
            if (!this.state.Component) {
                loader().then((Component) => {
                    this.setState({ Component });
                });
            }
        }

        render() {
            return (
                this.state.Component ?
                    <this.state.Component { ...this.props } /> :
                    <h1> Coming Soon </h1>
            );
        }
    }
);