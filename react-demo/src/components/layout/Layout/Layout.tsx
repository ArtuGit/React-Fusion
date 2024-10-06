import '../../../App.css'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {MainMenu} from "../MainMenu/MainMenu.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {Auth} from "../Auth/Auth.tsx";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <header className="bg-peach flex-none w-full">
                <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-40 py-2 md:py-0 md:h-10">
                    <div className="flex items-center mb-2 md:mb-0">
                        <Link to="/">
                            <div className="font-extrabold text-xl uppercase tracking-wider bg-black text-white px-2 py-1 transform -skew-x-12 inline-block shadow-[4px_4px_0_0_#ff8200]">
                                REACT DEMO
                            </div>
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Auth />
                    </div>
                </div>
            </header>

            <div className="grow w-full min-h-full flex">
                <MainMenu />

                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>

            <Footer/>

        </>
    )
}
