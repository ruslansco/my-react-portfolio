import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BuildIcon from '@mui/icons-material/Build';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,

  },
  icon: {
    color: '#fff',
  }
});

function MenuList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <DesktopMacIcon />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            < BuildIcon/>
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Me" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuList);
