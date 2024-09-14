import React, { FC } from 'react';

interface Stat {
    label: string;
    value: string | number;
}

interface CommonStatsProps {
    stats: Stat[];
}

export const CommonStats: FC<CommonStatsProps> = ({ stats }) => {
    return (
        <div className="flex flex-col md:flex-row md:space-x-8 mb-2 md:mb-0">
            {stats.map((stat, index) => (
                <div key={index} className="text-white text-center md:text-left">
                    <span className="font-bold">{stat.label}:</span> {stat.value}
                </div>
            ))}
        </div>
    );
};