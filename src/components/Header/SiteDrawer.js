import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { HouseRounded, InsertCommentRounded, EventRounded } from '@material-ui/icons';
import SiteColors from '../../Colors';

const useStyles = makeStyles({
  list: {
    backgroundColor: SiteColors.default,
    width: 'auto'
  },
  item: {
    color: SiteColors.accent
  }
});

const items = (classes) => [
  {
    name: 'Home',
    icon: <HouseRounded className={clsx(classes.item)}/>,
    url: '/'
  },
  {
    name: 'Events',
    icon: <EventRounded className={clsx(classes.item)}/>,
    url: '/calendar'
  },
  {
    name: 'Blog',
    icon: <InsertCommentRounded className={clsx(classes.item)}/>,
    url: '/blog'
  }
]

export default function SiteDrawer({ open = false, onClose=()=>{}}) {
  const classes = useStyles();

  return (
    <Drawer anchor='top' open={open} onClose={onClose}>
      <div
        className={clsx(classes.list)}
        role='presentation'
        onClick={onClose}
        onKeyDown={onClose}
        >
        <List>
          {items(classes).map((item) =>
            <Link key={item.name} to={item.url} style={{ textDecoration: 'none' }}>
              <ListItem className={clsx(classes.item)} button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          )}
        </List>
      </div>
    </Drawer>
  );
}