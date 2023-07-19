
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';




const menus = [
  {
    name : "Dashboard",
    path : "/",
    icon : "<HomeIcon />"
  },
  {
    name : "All Tasks",
    path : "/all-task"
  },
  {
    name : "Completed",
    path : "/completed"
  },
  {
    name : "Add A Task",
    path : "/add-a-task"
  }
]
const SideBar = () => {
 
  return (
     <List >
      {
        menus.map(menu => <ListItem sx={{m : "0"}} key={menu.path} disablePadding >
          <ListItemButton>
            {/* <ListItemIcon>
              
            </ListItemIcon> */}
          
       
            <ListItemText primary={menu.name} />
          </ListItemButton>
        </ListItem>)
      }
     </List>
  );
};

export default SideBar;