import React from "react";

export const MainSection = ({ title, children }: { title: string, children: React.ReactNode }) => {

    return (
        <section>
            <h2 className="text-3xl font-bold mb-4 italic">{title}</h2>
            {children}
        </section>
    );
};