import { Route, Routes } from "react-router-dom";
import {Main} from "@/components/main/Main.tsx";
import {About} from "@/components/main/header/about";
import {Contacts} from "@/components/main/header/contacts/Contacts.tsx";

export const Routing = () => (
    <div className={'mt-24'}>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contacts" element={<Contacts/>}/>
        </Routes>
    </div>
)