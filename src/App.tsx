import './App.css'

import {Header} from "@/components/main/header";
import {Routing} from "@/common/routing";

function App() {

    return (
        <div>
            <Routing/>
            <div>
                <Header/>
            </div>
        </div>
    )
}

export default App
