import React from 'react'
import lottery from '../ethereum/lottery'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { manager: '' };
    }

    async componentDidMount() {
        const manager = await lottery.methods.manager().call();
        this.setState({ manager });
    }

    render() {
        return <div>
            <h2>Lottery Smart Contract</h2>
            <p>This contract is managed by: {this.state.manager} </p>
        </div>
    }
}

export default App;