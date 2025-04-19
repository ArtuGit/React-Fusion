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
      textDecoration: 'none',
      fontWeight: isActive ? 'bold' : 500,
      padding: isActive ? '0.1rem 0.3rem' : 'initial',
      backgroundColor: isActive 
        ? (isDark ? 'rgba(143, 148, 251, 0.3)' : 'rgba(100, 108, 255, 0.1)') 
        : 'transparent',
      borderRadius: isActive ? '4px' : 'initial',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: isDark ? '#8f94fb' : '#646cff',
        color: '#fff',
        padding: '0.1rem 0.3rem',
        borderRadius: '4px',
        transition: 'all 0.3s ease-in-out',
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