import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from "./components/layout/Layout/Layout.tsx";
import {AppProviders} from "./context/AppProviders.tsx";
import {routes} from "./routes/routes.tsx";

function App() {
    return (
        <AppProviders>
            <Router>
                <div className="flex flex-col flex-nowrap justify-center items-center bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end min-h-screen">
                    <Layout>
                        <Routes>
                            {routes.map((route) => (
                                <Route key={route.path} path={route.path} element={<route.element />} />
                            ))}
                        </Routes>
                    </Layout>
                </div>
            </Router>
        </AppProviders>
    )
}

export default App
