import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";
import { Link } from "react-router-dom";


export const _Generated = ({ finalUrl }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const output = `npm init -y`

    return (
        <div className="Code">
            <h1>Get Started</h1>
            <div className="d-flex justify-content-center align-items-center">
                <pre>
                    <code className={'language-js'}>
                        {output}
                    </code>
                </pre>
                <button className="btn-accent blue blk" id="cpy" onClick={() => CopyCode(output)}>Copy <i className="fa-regular fa-copy"></i></button>
            </div>

            <h1>Structure</h1>
            <h4>For <em>Message</em></h4>


            <div className="d-flex justify-content-center pt-5">
                <img src={require("../assets/Structure.png")} alt="structure" draggable='false' />

                <div className="d-flex align-items-start flex-column">
                    <Link to={"/firebase/Generate/Create/" + finalUrl} className="btn-accent green blk mt-3">Create.tsx</Link>
                    <Link to={"/firebase/Generate/Read/" + finalUrl} className="btn-accent sky mt-3">Read.tsx</Link>
                    <Link to={"/firebase/Generate/Update/" + finalUrl} className="btn-accent yellow blk mt-3">Update.tsx</Link>
                    <Link to={"/firebase/Generate/Delete/" + finalUrl} className="btn-accent red blk mt-3">Delete.tsx</Link>

                    <Link to={"/firebase/Generate/Input/" + finalUrl} className="btn-accent purple blk mt-3">Input.tsx</Link>
                    <Link to={"/firebase/Generate/FirebaseConfig/" + finalUrl} className="btn-accent sky blk mt-3">Firebase.tsx</Link>
                </div>
            </div>


            <h1>Sample Project</h1>
            <a href="https://github.com/ProjectTutorials/firebaseTutorial" target={"_blank"} rel="noreferrer">
                <img className="mt-2 repoImg" src='https://github-readme-stats.vercel.app/api/pin/?username=ProjectTutorials&repo=firebaseTutorial&bg_color=f8fff5&title_color=005a80&text_color=4d4b49' alt="" />
            </a>

            <h1>Download Sample</h1>
            <h4><a className="mb-5 " href={require("../assets/firebaseTutorial.zip")}>Download</a></h4>

        </div>
    )
}