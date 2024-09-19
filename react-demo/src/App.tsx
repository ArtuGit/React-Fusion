import './App.css'
import { Layout } from "./components/layout/Layout/Layout.tsx";
import { AppProvider } from './context/AppContext';

function App() {
    return (
        <AppProvider>
            <div className="flex flex-col flex-nowrap justify-center items-center bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end min-h-screen">
                <Layout />
            </div>
        </AppProvider>
    )
}

export default App
