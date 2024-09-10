import '../../App.css'
import {FC, ReactElement} from "react";
import {StatItem} from "../StatItem/StatItem.tsx";

interface StatLineProps {
    children: ReactElement<StatItem>;
}

export const StatLine: FC<StatLineProps> = ({ children }: StatLineProps) => {
    return (
            <ul className="font-robomo mx-8 my-4 flex flex-wrap justify-center">
                {children}
            </ul>
);
};