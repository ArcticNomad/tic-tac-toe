import {startTransition, useState} from "react";

function Square(props)
{
    const [square, setSquare] = useState("");

    return(
        <button className="square" onClick={props.onClick} >{props.value}</button>
    )
}
export default Square;