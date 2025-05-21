import { Box, Toolbar, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {

    const location = useLocation();

    return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {[
            { text: 'Home', path: '/dashboard' },
            { text: 'Marketplace', path: '/marketplace' },
            { text: 'Market prices', path: '/marketprices' },
            { text: 'Upload Data', path: '/upload-data' },
            { text: 'Transaction Log', path: '/transaction-log' },
            // Add more items as needed
          ].map((item, index) => (
            <ListItem button component={NavLink} to={item.path} key={item.text}>
              <ListItemText style={{color: 'blue', textDecoration: location.pathname === item.path ? 'underline' : 'none'}} primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>)
}

export default Sidebar
