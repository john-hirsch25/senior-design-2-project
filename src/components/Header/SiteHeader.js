import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import SiteDrawer from './SiteDrawer';
import HomeButton from './HomeButton';
import SiteColors from '../../Colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

const toolbarStyles = {
  toolbar: {
    backgroundColor: SiteColors.default
  },
  transparentToolbar: {
    background: 'transparent', 
    boxShadow: 'none'
  }
}

function SiteHeader({ pageName = 'Home', clearBg = false }) {
  const classes = useStyles();
  const [headerOpen, setHeaderOpen] = useState(false);

  return (
    <div>
      <SiteDrawer 
        open={headerOpen} 
        onClose={()=>{setHeaderOpen(false)}}/>
      <AppBar position="static" style={clearBg ? toolbarStyles.transparentToolbar : toolbarStyles.toolbar}>
        <Toolbar>
          <HomeButton />
          <Typography variant="h6" className={classes.title}>
            {pageName}
          </Typography>
          <IconButton 
            edge="start" 
            className={'blurrable-social-icon'} 
            color="inherit" 
            aria-label="menu"
            onClick={()=>{setHeaderOpen(true)}}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SiteHeader;
