import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  CssBaseline,
  useMediaQuery,
  MenuItem,
  Link as MuiLink,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link, Outlet } from 'react-router-dom';
import { NAV_ITEMS } from '@services/constants';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Layout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {NAV_ITEMS.map((text) => (
          <ListItem key={text} component={Link} to={`/${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const menu = (
    <>
      {NAV_ITEMS.map((text) => (
        <MenuItem key={text} component={Link} to={`/${text.toLowerCase()}`} onClick={handleMenuClose}>
          {text}
        </MenuItem>
      ))}
    </>
  );

  const footer = (
    <Box
      component="footer"
      sx={{
        p: 2,
        mt: 'auto',
        backgroundColor: theme.palette.grey[200],
        textAlign: 'center',
        width: '100%'
      }}
    >
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <MuiLink href="https://facebook.com" target="_blank" rel="noopener">
          <Facebook />
        </MuiLink>
        <MuiLink href="https://twitter.com" target="_blank" rel="noopener">
          <Twitter />
        </MuiLink>
        <MuiLink href="https://instagram.com" target="_blank" rel="noopener">
          <Instagram />
        </MuiLink>
        <MuiLink href="https://linkedin.com" target="_blank" rel="noopener">
          <LinkedIn />
        </MuiLink>
      </Box>
      <Box sx={{ mb: 2 }}>
        {NAV_ITEMS.map((item) => (
          <MuiLink
            key={item}
            component={Link}
            to={`/${item.toLowerCase()}`}
            sx={{ mx: 1, textDecoration: 'none', color: 'textSecondary' }}
          >
            {item}
          </MuiLink>
        ))}
      </Box>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Nikki Rae. All rights reserved.
      </Typography>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            Nikki Rae
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {menu}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
      >
        <Toolbar />
        <Container sx={{ mt: 4 }}>
          <Outlet />
        </Container>
        
      </Box>
      {footer}
    </Box>
  );
};

export default Layout;