import { BoxProps } from '@mui/material';
import { FC, ReactNode } from 'react';

export const Header: FC<BoxProps> = ({ children }: { children?: ReactNode }) => <>{children}</>;

export default Header;
