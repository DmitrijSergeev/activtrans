import {Logo} from "@/components/main/header/logo/Logo.tsx";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full shadow z-50 p-4 flex justify-between">
            <div className={'flex justify-between gap-6'}>
                <Logo/>
                <h1 className={'text-5xl'}>АктивТрансТур</h1>
            </div>
            <div className={'flex justify-between gap-4'}>
                <NavLink to={'/'}>Главная</NavLink>
                <NavLink to={'/about'}>О нас</NavLink>
                <NavLink to={'/contacts'}>Контакты</NavLink>
            </div>
        </div>
    );
};