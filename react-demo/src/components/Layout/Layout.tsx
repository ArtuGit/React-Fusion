import '../../App.css'
import React, {FC, useState} from 'react';

export const Layout: FC = () => {
    return (
        <>
            <header className="bg-peach flex-none h-10 w-full">

                <div className="flex justify-between items-center h-full px-40">
                    <div className="flex items-center">
                        <img src="/rd.svg" alt="Logo" className="h-6 w-6 mr-2" />
                    </div>
                    <div>
                        <a href="/login" className="text-blue-500 mr-4">Login</a>
                        <a href="/register" className="text-blue-500">Register</a>
                    </div>
                </div>

            </header>
            <section className="grow w-full">
                {/*<section className="bg-green-400">*/}
                {/*</section>*/}
                {/*<main className="bg-blue-400">*/}
                {/*</main>*/}
            </section>
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