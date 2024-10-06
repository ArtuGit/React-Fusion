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
                    <Layout>
                        <Routes>
                            {routes.map((route) => (
                                <Route key={route.path} path={route.path} element={<route.element />} />
                            ))}
                        </Routes>
                    </Layout>
            </Router>
        </AppProviders>
    )
}

export default App
