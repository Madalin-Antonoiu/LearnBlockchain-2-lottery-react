import React from 'react'
import lottery from '../ethereum/lottery'
import web3 from '../web3';

class App extends React.Component {
    state = { manager: '', players: [], balance: '' };

    async componentDidMount() {
        const manager = await lottery.methods.manager().call();
        const players = await lottery.methods.getPlayers.call();
        const balance = await web3.eth.getBalance(lottery.options.address);

        this.setState({ manager, players, balance });
    }

    render() {
        return <div>
            <h2>Lottery Smart Contract</h2>
            <p>This contract is managed by: {this.state.manager}</p>
            <p>There are currently [{this.state.players.length}] people entered.</p>
            <p> They are competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ETH ! </p>

        </div>
    }
}

export default App;