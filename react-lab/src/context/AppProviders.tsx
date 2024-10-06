import React, { FC, ReactNode } from 'react';
import { AppThemeProvider } from './AppThemeProvider';
import { SettingsMenuProvider } from './SettingsMenuProvider';
import { SearchLocationsDialogProvider } from './SearchLocationsDialogProvider';
import { MapZoomProvider } from './MapZoomProvider';
import { MapStyleProvider } from './MapStyleProvider';
import { LocationDetailsProvider } from './LocationDetailsProvider';
import { MapDataProvider } from './MapDataProvider';
import { LocationMenuProvider } from './LocationMenuProvider';
import { MapStyleMenuProvider } from './MapStyleMenuProvider';
import {AuthProvider} from "./AuthProvider.tsx";
import {StatisticsProvider} from "./StatisticsProvider.tsx";
import {TimerProvider} from "./TimeProvider.tsx";

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <AuthProvider>
                <StatisticsProvider>
                    <TimerProvider>
                        {children}
                    </TimerProvider>
                </StatisticsProvider>
            </AuthProvider>
        </>
    );
};

