import "./Robot.css";

export default function Robot(props) {
    return (
        <div className="rbt" style={{top:props.top+'px', left:props.left+'px', position:'absolute'}}/>
    )
}