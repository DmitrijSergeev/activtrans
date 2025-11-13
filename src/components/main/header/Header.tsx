import {About} from "@/components/main/header/about/About.tsx";
import {Logo} from "@/components/main/header/logo/Logo.tsx";
import {Contacts} from "@/components/main/header/contacts/Contacts.tsx";

export const Header = () => {
    return (
        <div>
            <div>
                <Logo/>
            </div>
            <div>
                <About/>
                <Contacts/>
            </div>
        </div>
    );
};