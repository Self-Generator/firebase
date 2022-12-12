import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function SignIn() {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "SignIn";
    }, []);


    const output =
        `import { auth, provider } from "../config/Firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom"

export const SignIn = () => {

    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider)
        navigate('/')
    }

    return (
        <div>
            <button className="btn-g" onClick={signInWithGoogle}>
                <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Google.svg" alt="google logo" />
                <p>Sign in with Google</p>
            </button>
        </div>
    )
}`

    return (
        <div className="Code">
            <h1>SignIn</h1>
            <kbd>security/SignIn.tsx</kbd>
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