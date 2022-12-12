import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function _Update({ name, Name, Field1, Field2 }) {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "Update";
    }, []);


    const output =
        `import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../config/Firebase"

export const update${Name} = async (existing${Field1}, existing${Field2}, id) => {
    const post = doc(db, '${name}', id);
    const newFields = { this${Field1}: existing${Field1}, this${Field2}: existing${Field2} };
    await updateDoc(post, newFields);
}`

    return (
        <div className="Code">
            <h1>Update</h1>
            <kbd>utils/Update/Update{Name}.tsx</kbd>
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