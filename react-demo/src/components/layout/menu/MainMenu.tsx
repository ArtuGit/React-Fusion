import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

export const MainMenu = () => {
    return (
        <section className="w-64 flex items-center bg-blue-500">
            <nav className="w-full">
                <ul className="py-4">
                    {routes.map((route) => (
                        <li key={route.path} className="hover:bg-flush-orange">
                            <Link to={route.path} className="block w-full h-full px-6 py-2 text-gray-800">
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
};