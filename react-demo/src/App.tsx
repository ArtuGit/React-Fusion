import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from "./components/layout/Layout/Layout.tsx";
import { AppProvider } from './context/AppContext';
import ComponentInteractionsPage from "./pages/ComponentInteractionsPage.tsx";
import BoxesPage from './pages/BoxesPage.tsx';
import FormValidationPage from './pages/FormValidationPage.tsx';

function App() {
    return (
        <AppProvider>
            <Router>
                <div className="flex flex-col flex-nowrap justify-center items-center bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end min-h-screen">
                    <Layout>
                        <Routes>
                            <Route path="/boxes" element={<BoxesPage />} />
                            <Route path="/form-validation" element={<FormValidationPage />} />
                            <Route path="/component-interactions" element={<ComponentInteractionsPage />} />
                            {/* Add more routes here as needed */}
                        </Routes>
                    </Layout>
                </div>
            </Router>
        </AppProvider>
    )
}

export default App
