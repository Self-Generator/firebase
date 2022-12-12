import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function _Create({ name, Name, Field1, Field2 }) {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "Create";
    }, []);


    const output =
        `import { addDoc } from "firebase/firestore";
import { ${name}CollectionRef } from "../../config/Firebase";

export const create${Name} = async (existing${Field1}, existing${Field2}) => {
    await addDoc(${name}CollectionRef, {
        this${Field1}: existing${Field1},
        this${Field2}: existing${Field2},
    })
    existing${Field1}("");
    existing${Field2}("");
}`

    return (
        <div className="Code">
            <h1>Create</h1>
            <kbd>utils/Create/Create{Name}.tsx</kbd>
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