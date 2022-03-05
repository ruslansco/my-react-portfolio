import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuList from './Menu/MenuItems';


const drawerWidth = 240;

const useStyles = makeStyles({
    topbar: {
        background: "#192734",
        borderTop: "1px solid #000",
        borderBottom: "1px solid #000",
        borderRight: "1px solid #000",
        color: "#f5f6f7"
    },
    content: {
        background: "#151E29",
        color: "#fff"
    },
    sidebarTop: {

    },
    sidebarItem: {
        borderBottom: "1px solid #000",
    },
    sidebarIcon: {
 
        color: "#fff",

    },
    menuText: {
      color: "#fff",
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: "15px",
      paddingLeft: "2em",
    },
    menuItemText: {
      borderBottom: 0,
      color: "inherit",
      cursor: "pointer",
      display: "block",
      letterSpacing: "0.075em",
      fontFamily: "Open Sans"
    },
    icon: {
      color: "fff",
    }
  });

  

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));
  
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  
  const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: '#192734',
    color: '#fff',
    display: 'flex',
    borderBottom: "1px solid #000"

  }));

  const BorderBar = styled('div')(({ theme }) => ({
    backgroundColor: '#52edc7',
    width: '70%',
    margin: '0 auto',
    padding: '1px'

  }));

  const MenuTextBorder = styled('div')(({ theme }) => ({
    background: "rgba(210, 215, 217, 0.75)",
    width: "30%",
    height: "1px",
    marginTop: '5px',
    textAlign: "center",


  }));
function MainBox() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (

      <Box sx={{ display: 'flex'}} >
      
        <CssBaseline />
        <StyledDiv>
        <AppBar position="fixed" open={open}>
          <Toolbar  className={classes.topbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              R.S. Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#151E29',
              border: '1px solid #000',
              color: '#fff',

            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader >
            <IconButton onClick={handleDrawerClose} >
              {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.sidebarIcon}/> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
<MenuList/>

        </Drawer>
        <Main open={open} >
          <DrawerHeader />
          <Typography paragraph>
          <BorderBar/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.

          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis

          </Typography>
        </Main>
        </StyledDiv>
      </Box>
    );
  }

export default MainBox;