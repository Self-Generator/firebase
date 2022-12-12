import { GeneratedRoutes } from "../routes/GeneratedRoutes"
import { Link } from 'react-router-dom'
import { useEffect } from "react"

export const Generate = () => {

    useEffect(() => {
        document.title = "Generated"
    })

    const url = window.location.href;
    const urlSplit = url.split("/");
    const name = urlSplit[urlSplit.length - 3];
    const field1 = urlSplit[urlSplit.length - 2];
    const field2 = urlSplit[urlSplit.length - 1];

    const finalUrl = `${name}/${field1}/${field2}`

    return (
        <div className="Reader">
            <br /><br />
            <div className="d-flex justify-content-between ">
                <div className="d-flex justify-content-start">
                    <Link to={"/firebase/Generate/Dependancies/" + finalUrl} className="btn-accent sky">Dependancies</Link>
                </div>
                <Link to={"/firebase/Generate/" + finalUrl} className="btn-accent black"><i className="fa-solid fa-arrow-left-long"></i> Back</Link>
            </div>

            <div className="d-flex justify-content-center flex-wrap pt-5">
                <Link to={"/firebase/Generate/Create/" + finalUrl} className="btn-accent green blk">Create.tsx</Link>
                <Link to={"/firebase/Generate/Read/" + finalUrl} className="btn-accent sky">Read.tsx</Link>
                <Link to={"/firebase/Generate/Update/" + finalUrl} className="btn-accent yellow blk">Update.tsx</Link>
                <Link to={"/firebase/Generate/Delete/" + finalUrl} className="btn-accent red blk">Delete.tsx</Link>
            </div>
            <div className="d-flex justify-content-center flex-wrap pt-3">
                <Link to={"/firebase/Generate/Input/" + finalUrl} className="btn-accent purple blk">Input.tsx</Link>
                <Link to={"/firebase/Generate/FirebaseConfig/" + finalUrl} className="btn-accent sky">Firebase.tsx</Link>
            </div>

            <GeneratedRoutes />
        </div>
    )
}   
