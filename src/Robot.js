import "./Robot.css";

export default function Robot(props) {
    return (
        //TODO: Change to hold state?
        <div className="rbt" style={{top:props.top+'px', left:props.left+'px', position:'absolute'}}/>
    )
}