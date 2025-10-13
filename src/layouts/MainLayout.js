import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const drawerWidth = 240;

const navItems = [
  { to: '/dashboard', label: 'Дашборд' },
  { to: '/objects', label: 'Объекты' },
  { to: '/deviations', label: 'Отклонения' },
  { to: '/export', label: 'Экспорт' },
  { to: '/milestones', label: 'Этапы' },
  { to: '/applications', label: 'Заявки' },
];

export default function MainLayout() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Генплан — мониторинг реализации
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton component={Link} to={item.to} selected={location.pathname === item.to}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
