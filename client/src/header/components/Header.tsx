import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { routes } from '../../routes';
import ThemeSwitcherWidget from '../../theme/widgets/ThemeSwitcherWidget';
import styles from '../styles/Header.module.scss';

function Header() {
    const location = useLocation();
    const route = routes.find((route) => location.pathname.match(route.rule));

    return (
        <Box className={styles.header__wrapper}>
            <Toolbar variant="dense">
                {route && (
                    <Box>
                        <Typography variant="h1" component="h1">{route.title}</Typography>
                        <Typography variant="body1" component="p" className={styles.subtitle}>
                            {route.subtitle}
                        </Typography>
                    </Box>
                )}
                <Box flexGrow={1} />
                <ThemeSwitcherWidget />
            </Toolbar>
        </Box>
    );
}

export default Header;
