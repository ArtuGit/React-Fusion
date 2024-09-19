import '../../../App.css'
import React, { useContext } from 'react';
import { Dialog } from "../../ui/Dialog/Dialog.tsx";
import { CommonStats } from "../CommonStats/CommonStats.tsx";
import { ComponentInteractions } from "../../feature/component-interactions/ComponentInteractions.tsx";
import { AppContext } from '../../../context/AppContext';

export const Layout: React.FC = () => {
    const context = useContext(AppContext);
    
    if (!context) {
        throw new Error("Layout must be used within an AppProvider");
    }

    const { currentTime, stats, handleLoginAction, handleRegisterAction } = context;

    return (
        <>
            <header className="bg-peach flex-none w-full">
                <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-40 py-2 md:py-0 md:h-10">
                    <div className="flex items-center mb-2 md:mb-0">
                        <a href="/react-demo/public">
                            <div className="font-extrabold text-xl uppercase tracking-wider bg-black text-white px-2 py-1 transform -skew-x-12 inline-block shadow-[4px_4px_0_0_#ff8200]">
                                REACT DEMO
                            </div>
                        </a>
                    </div>
                    <div className="flex space-x-4">
                        <Dialog
                            title="Login"
                            actionLabel="Log In"
                            onAction={handleLoginAction}
                            trigger={<button className="text-blue-500">Login</button>}
                        >
                            <p>Enter your credentials to log in.</p>
                            {/* Add login user-form or other content here */}
                        </Dialog>
                        <Dialog
                            title="Register"
                            actionLabel="Register"
                            onAction={handleRegisterAction}
                            trigger={<button className="text-blue-500">Register</button>}
                        >
                            <p>Create a new account.</p>
                            {/* Add registration user-form or other content here */}
                        </Dialog>
                    </div>
                </div>
            </header>

            <div className="grow w-full min-h-full flex">
                <section className="w-64 flex items-center bg-blue-500">
                    <nav className="w-full">
                        <ul className="py-4">
                            <li className="px-6 py-2 hover:bg-flush-orange font-bold">
                                <a href="#" className="text-gray-800">Menu Item 1</a>
                            </li>
                            <li className="px-6 py-2 hover:bg-flush-orange">
                                <a href="#" className="text-gray-800">Menu Item 2</a>
                            </li>
                            <li className="px-6 py-2 hover:bg-flush-orange">
                                <a href="#" className="text-gray-800">Menu Item 3</a>
                            </li>
                        </ul>
                    </nav>
                </section>

                <main className="flex-1 p-8">
                    <h2 className="text-2xl font-bold mb-4">Welcome to React Demo</h2>
                    <ComponentInteractions currentTime={currentTime} />
                </main>
            </div>

            <footer className="bg-flush-orange flex-none w-full sticky bottom-0">
                <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-40 py-2 md:py-0 md:h-16">
                    <CommonStats stats={stats} />
                    <div className="flex flex-col md:flex-row items-center md:space-x-4">
                        <div className="text-xl font-bold text-white mb-2 md:mb-0">
                            {currentTime.toLocaleTimeString()}
                        </div>
                        <p className="text-sm text-white mb-2 md:mb-0 text-center md:text-left">
                            All rights reserved © {new Date().getFullYear()}
                        </p>
                        <div className="font-extrabold text-sm uppercase tracking-wider bg-black text-white px-1 py-0.5 transform -skew-x-12 inline-block shadow-[2px_2px_0_0_#ff8200]">
                            REACT DEMO
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}