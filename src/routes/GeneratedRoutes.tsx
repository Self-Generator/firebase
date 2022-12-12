import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/themes/prism.css";
import "../style/App.css";
import Dependancies from "../data/Dependancies";
import { Routes, Route } from "react-router-dom"
import { _Generated } from '../pages/_Generated'
import _Create from "../data/_Create";
import _Read from "../data/_Read";
import _Update from "../data/_Update";
import _Delete from "../data/_Delete";
import Input from "../data/Input";
import FirebaseConfig from "../data/FirebaseConfig";

export const GeneratedRoutes = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    //read full url
    const url = window.location.href;

    //split url by /
    const urlSplit = url.split("/");

    //get last item in array
    const name = urlSplit[urlSplit.length - 3];
    const Name = name.charAt(0).toUpperCase() + name.slice(1);
    const field1 = urlSplit[urlSplit.length - 2];
    const Field1 = field1.charAt(0).toUpperCase() + field1.slice(1);
    const field2 = urlSplit[urlSplit.length - 1];
    const Field2 = field2.charAt(0).toUpperCase() + field2.slice(1);

    const finalUrl = `${name}/${field1}/${field2}`

    return (
        <Routes>
            <Route path="/*" element={<_Generated finalUrl={finalUrl} />} />

            <Route path="/Create/*" element={<_Create name={name} Name={Name} Field1={Field1} Field2={Field2} />} />
            <Route path="/Read/*" element={<_Read name={name} Name={Name} Field1={Field1} Field2={Field2} />} />
            <Route path="/Update/*" element={<_Update name={name} Name={Name} Field1={Field1} Field2={Field2} />} />
            <Route path="/Input/*" element={<Input Name={Name} Field1={Field1} field1={field1} Field2={Field2} field2={field2} />} />

            <Route path="/Delete/*" element={<_Delete name={name} Name={Name} />} />
            <Route path="/FirebaseConfig/*" element={<FirebaseConfig name={name} />} />

            <Route path="/Dependancies/*" element={<Dependancies />} />
        </Routes>
    )
}   