import '../../App.css'
import React, {FC, useState} from 'react';
import {Boxes} from "../Boxes/Boxes.tsx";

export const Layout: FC = () => {
    return (
        <>
            <header className="bg-peach flex-none h-10 w-full">

                <div className="flex justify-between items-center h-full px-40">
                    <div className="flex items-center">
                        <a href="/">
                            {/*<div src="/rd.svg" alt="Logo" className="h-6 w-6 mr-2" />*/}
                            <div className="font-extrabold text-xl uppercase tracking-wider bg-black text-white px-2 py-1 transform -skew-x-12 inline-block shadow-[4px_4px_0_0_#ff8200]">
                                REACT DEMO
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="/login" className="text-blue-500 mr-4">Login</a>
                        <a href="/register" className="text-blue-500">Register</a>
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

                    {/* Main content section */}
                    <main className="flex-1 p-8">
                        <h2 className="text-2xl font-bold mb-4">Welcome to React Demo</h2>
                          <Boxes amount={15}/>
                    </main>
            </div>
            <footer className="bg-flush-orange flex-none h-10 w-full">
                <div className="flex justify-end items-center h-full px-40">
                    <p className="text-sm text-white">
                        All rights reserved © {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        </>
    )
}