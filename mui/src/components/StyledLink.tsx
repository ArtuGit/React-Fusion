import { forwardRef, ReactNode } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link, LinkProps, useTheme } from '@mui/material';

interface StyledLinkProps extends LinkProps {
  children: ReactNode;
  to?: string;
  external?: boolean;
}

const StyledLink = forwardRef<HTMLAnchorElement, StyledLinkProps>(
  ({ children, to, external, ...props }, ref) => {
    const theme = useTheme();
    const location = useLocation();
    const isDark = theme.palette.mode === 'dark';
    const isActive = to && !external && location.pathname === to;

    const linkStyles = {
      position: 'relative',
      fontWeight: isActive ? 'bold' : 500,
      padding: '0.25rem 0.5rem',
      margin: '0 0.2rem',
      backgroundColor: isActive 
        ? (isDark ? 'rgba(143, 148, 251, 0.3)' : 'rgba(100, 108, 255, 0.1)') 
        : 'transparent',
      borderRadius: '4px',
      display: 'inline-block',
      height: '1.5rem',
      lineHeight: '1.5rem',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: isDark ? '#8f94fb' : '#646cff',
        color: '#fff',
      },
    };

    // External link
    if (external) {
      return (
        <Link
          ref={ref}
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          sx={linkStyles}
          {...props}
        >
          {children}
        </Link>
      );
    }

    // Internal link (React Router)
    if (to) {
      return (
        <Link
          ref={ref}
          component={RouterLink}
          to={to}
          sx={linkStyles}
          {...props}
        >
          {children}
        </Link>
      );
    }

    // Regular link
    return (
      <Link ref={ref} sx={linkStyles} {...props}>
        {children}
      </Link>
    );
  }
);

StyledLink.displayName = 'StyledLink';

export default StyledLink; 