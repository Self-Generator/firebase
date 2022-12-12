import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function SignOut() {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "SignOut";
    }, []);


    const output =
        `import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../config/Firebase"

export const SignOut = () => {

    const navigate = useNavigate()

    const signOutWithGoogle = async () => {
        await signOut(auth)
        navigate('/')
    }

    return (
        <div>
            <button className="btn-accent btn-red" onClick={signOutWithGoogle}>
                Sign Out
            </button>
        </div>
    )
}`

    return (
        <div className="Code">
            <h1>SignOut</h1>
            <kbd>security/SignOut.tsx</kbd>
            <br /> <br />

            <button className="btn-accent green blk" id="cpy" onClick={() => CopyCode(output)}>Copy <i className="fa-regular fa-copy"></i></button>

            <pre>
                <code className={'language-js'}>
                    {output}
                </code>
            </pre>
        </div>
    )
}