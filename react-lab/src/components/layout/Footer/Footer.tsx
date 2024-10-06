import {FC, useContext} from 'react';
import {Statistics} from "../CommonStats/Statistics.tsx";
import {StatContext} from "../../../context/StatisticsProvider.tsx";
import {TimeContext} from "../../../context/TimeProvider.tsx";

export const Footer: FC = () => {
    const stats = useContext(StatContext);
    const currentTime = useContext(TimeContext);

    return (
        <footer className="bg-flush-orange flex-none w-full sticky bottom-0">
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-40 py-2 md:py-0 md:h-16">
                <Statistics stats={stats}/>
                <div className="flex flex-col md:flex-row items-center md:space-x-4">
                    <div className="text-xl font-bold text-white mb-2 md:mb-0">
                        {currentTime!.toLocaleTimeString()}
                    </div>
                    <p className="text-sm text-white mb-2 md:mb-0 text-center md:text-left">
                        All rights reserved © {new Date().getFullYear()}
                    </p>
                    <div
                        className="font-extrabold text-sm uppercase tracking-wider bg-black text-white px-1 py-0.5 transform -skew-x-12 inline-block shadow-[2px_2px_0_0_#ff8200]">
                        REACT DEMO
                    </div>
                </div>
            </div>
        </footer>
    );
}