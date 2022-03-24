import {Component} from "react";
import Robot from "./Robot";

class Game extends Component {
constructor(props) {
    super(props);
    this.state = {
        activeRbtTop: 0,
        activeRbtLeft: 0
    }
    this.LOG_TAG = 'GAME: '
}

moveRight = () => {
    this.setState({activeRbtLeft: this.state.activeRbtLeft + 10})
}

render() {
    return (
        <main className="Game">
            <div>The game is working.</div>
            <button onClick={this.moveRight}>Move Right</button>
            <Robot top={this.state.activeRbtTop} left={this.state.activeRbtLeft}/>
        </main>
    )
}
}

export default Game