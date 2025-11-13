import {Route, Routes} from "react-router"
import {Main} from "@/components/main/Main.tsx";
import {About} from "@/components/about/About.tsx";

export const Routing = () => (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="about" element={<About/>}/>
    </Routes>
)