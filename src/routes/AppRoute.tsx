import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { Form } from "../pages/Form"
import { Generate } from "../pages/Generated"
import { Home } from "../pages/Home"

export const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/firebase/" element={<Home />} />
                    <Route path="/firebase/Form" element={<Form />} />
                    <Route path="/firebase/generate" element={<Generate />} />
                    <Route path="/firebase/generate/*" element={<Generate />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}