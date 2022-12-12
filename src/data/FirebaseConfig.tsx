import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function FirebaseConfig({ name }) {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "FirebaseConfig";
    }, []);


    const output =
        `// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    // Your config here

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)

// DATABASE NAME
export const ${name}CollectionRef = collection(db, "${name}")`

    return (
        <div className="Code">
            <h1>FirebaseConfig</h1>
            <kbd>config/Firebase.tsx</kbd>
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