import { Link, useLocation } from "react-router-dom";
import { routes } from "../../../routes/routes";

export const MainMenu = () => {
    const location = useLocation();

    return (
        <section className="w-64 flex items-center bg-blue-500">
            <nav className="w-full">
                <ul className="py-4">
                    {routes.map((route, index) => {
                        const isSelected = location.pathname === route.path || (index === 0 && location.pathname === '/');
                        return (
                            <li key={route.path} className={`hover:bg-flush-orange ${isSelected ? 'bg-amber-500' : ''}`}>
                                <Link 
                                    to={route.path} 
                                    className={`block w-full h-full px-6 py-2 text-xl ${isSelected ? 'text-white font-bold' : 'text-gray-800'}`}
                                >
                                    {route.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </section>
    );
};