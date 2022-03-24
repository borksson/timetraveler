import {Component} from "react";
import Robot from "./Robot";

class Game extends Component {
constructor(props) {
    super(props);
    this.state = {
        activeRbtTop: 0,
        activeRbtLeft: 0,
        isPaused: true
    }
    this.LOG_TAG = 'GAME: '
}

pause = () => {
    if(this.state.isPaused){
        this.setState({isPaused:false})
    } else {
        this.setState({isPaused:true})
    }
}


keyCapture = (event) => {
    //TODO: Add diagonal movement
    switch (event.key){
        case 'w':
            this.setState({activeRbtTop: this.state.activeRbtTop - 5})
            return;
        case 's':
            this.setState({activeRbtTop: this.state.activeRbtTop + 5})
            return;
        case 'a':
            this.setState({activeRbtLeft: this.state.activeRbtLeft - 5})
            return;
        case 'd':
            this.setState({activeRbtLeft: this.state.activeRbtLeft + 5})
            return;
        default:
            return;
    }
}

componentDidMount(){
    document.addEventListener("keydown", this.keyCapture, false);
}
componentWillUnmount(){
    document.removeEventListener("keydown", this.keyCapture, false);
}

render() {
    let pause
    if(this.state.isPaused){
        pause = <label>yes</label>
    }else {
        pause = <label>no</label>
    }

    return (
        <main className="Game">
            <div>
                The game is working. Is the game paused? {pause}
            </div>
            <button onClick={this.pause}>Pause</button>
            <Robot top={this.state.activeRbtTop} left={this.state.activeRbtLeft}/>
        </main>
    )
}

}

export default Game