import {Component} from "react";
import Game from "./Game";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <main className="App">
                <div>The app is working.</div>
                <Game/>
            </main>
        )
    }
}

export default App