import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export default function _Read({ name, Name, Field1, Field2 }) {
    useEffect(() => {
        Prism.highlightAll();
        document.title = "Read";
    }, []);


    const output =
        `import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { ${name}CollectionRef } from "../../config/Firebase"
import { delete${Name} } from "../delete/Delete${Name}"
import { Inputs } from "../input/Inputs"

export const Read${Name} = () => {
    const [${name}, set${Name}] = useState([])
    const [btn, setBtn] = useState(false);

    const read${Name} = async () => {
        const data = await getDocs(${name}CollectionRef)
        set${Name}(data.docs.map(
            (doc) => ({
                ...doc.data(), id: doc.id
            })
        ));
    }

    useEffect(() => {
        read${Name}()
    })

    return (
        <div className="mainSection">

            {/* SHOW LOADING */}
            {${name}.length === 0 && <p>Loading...</p>}

            {/* SHOW POSTS  */}
            {${name}.map((this${Name}) => (
                <div key={this${Name}.id} className='subSection text-center'>

                    <h3>{this${Name}.this${Field1}}</h3>
                    <h3>{this${Name}.this${Field2}}</h3>

                    <button onClick={() => {
                        delete${Name}(this${Name}.id)
                    }}
                        className='btn-accent red blk'>
                        Delete
                    </button>



                    <button onClick={() => {
                        setBtn(i => !i)
                    }} className='btn-accent blue blk'>
                        Update
                    </button>

                    {btn &&
                        <Inputs existing${Field1}={this${Name}.this${Field1}} existing${Field2}={this${Name}.this${Field2}} id={this${Name}.id} b={btn} />
                    }

                </div>
            ))}

        </div>
    )
}`

    return (
        <div className="Code">
            <h1>Read</h1>
            <kbd>utils/Read/Read{Name}.tsx</kbd>
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