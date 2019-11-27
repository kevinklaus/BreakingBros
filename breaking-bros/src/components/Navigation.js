import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DummyPage from './DummyPage';
import {RouteButton} from './RouteButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <RouteButton color="secondary" variant="outlined" text="Home" route="/" color="inherit"/>
          <Typography variant="h6" className={classes.title}>
            Breaking Bros
          </Typography>
          <RouteButton color="secondary" variant="outlined" text="Go to Dummy" route="/dummy" color="inherit"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}