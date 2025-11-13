import {About} from "@/components/main/header/about/About.tsx";
import {Logo} from "@/components/main/header/logo/Logo.tsx";
import {Contacts} from "@/components/main/header/contacts/Contacts.tsx";
import {NavLink} from "react-router";

export const Header = () => {
    return (
        <div className={'flex justify-between'}>
            <div className={'flex justify-between gap-6'}>
                <Logo/>
                <h1 className={'text-5xl'}>АктивТрансТур</h1>
            </div>
            <div className={'flex justify-between gap-4'}>
                <NavLink to={'/about'}><About/></NavLink>
                <NavLink to={'/contacts'}><Contacts/></NavLink>
            </div>
        </div>
    );
};