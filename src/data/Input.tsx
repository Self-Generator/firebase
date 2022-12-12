import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function _Update({ Name, field1, Field1, field2, Field2 }) {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "Input";
    }, []);


    const output =
        `import { useState } from "react"
import { create${Name} } from "../create/Create${Name}"
import { update${Name} } from "../update/Update${Name}"

export const Inputs = ({ existing${Field1}, existing${Field2}, id, b }) => {

    const [${field1}, set${Field1}] = useState(existing${Field1})
    const [${field2}, set${Field2}] = useState(existing${Field2})

    function createTHE${Name}() {
        create${Name}(${field1}, ${field2})
        set${Field1}('')
        set${Field2}('')
    }

    function updateTHE${Name}() {
        update${Name}(${field1}, ${field2}, id)
        set${Field1}(${field1})
        set${Field2}(${field2})
    }

    return (
        <>
            {b === 'false' ? <div className="anchor"></div> : <> </>}
            <div className="contactForm mainSection mt-5 pt-5">
                <input type={'text'} placeholder={'${Field1}...'}
                    onChange={(event) => {
                        set${Field1}(event.target.value);
                    }}
                    value={${field1}} />
                <textarea placeholder={'${Field2}...'}
                    onChange={(event) => {
                        set${Field2}(event.target.value)
                    }}
                    value={${field2}} />


                {b === 'false' ?
                    <button onClick={createTHE${Name}}>Create</button>
                    :
                    <button onClick={updateTHE${Name}}>Update</button>
                }
            </div>
        </>
    )
}`

    return (
        <div className="Code">
            <h1>Input</h1>
            <kbd>utils/Input/Input.tsx</kbd>
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