import { useEffect } from "react"
import CopyCode from "../utils/Copy"

export default function Dependancies() {

    useEffect(() => {
        document.title = "Dependancies"
    })

    const output = `npm i firebase react-firebase-hooks react-hook-form yup `

    return (
        <div className="Code">
            <h1>Dependancies</h1>
            <br /> <br />

            <button className="btn-accent green blk" id="cpy" onClick={() => CopyCode(output)}>Copy <i className="fa-regular fa-copy"></i></button>

            <br /> <br />
            <h3>firebase</h3>
            <h3>react-firebase-hooks</h3>
            <h3>react-hook-form</h3>
            <h3>yup</h3>
        </div>
    )
}