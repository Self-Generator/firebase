import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function _Delete({ name, Name }) {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "Delete";
    }, []);


    const output =
        `import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../config/Firebase"

export const delete${Name} = async (id) => {
    const data = doc(db, '${name}', id)
    await deleteDoc(data)
}`

    return (
        <div className="Code">
            <h1>Delete</h1>
            <kbd>utils/Delete/Delete{Name}.tsx</kbd>
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