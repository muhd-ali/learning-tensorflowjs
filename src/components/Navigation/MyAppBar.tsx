import React from 'react';
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerInnerView from "components/Navigation/DrawerInnerView"
import { titleForUrl } from 'models/urls';
import { withRouter, RouteComponentProps, StaticContext } from 'react-router';

const drawerWidth = 240;
const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 6,
  },
  grow: {
    flex: 1,
  },
});

type MyAppBarProps = WithStyles<typeof styles> & RouteComponentProps<any, StaticContext, any> & {
  theme: Theme,
}
interface State {
  isMobileOpen: boolean
}

class MyAppBar extends React.Component<MyAppBarProps, State> {
  state = {
    isMobileOpen: false,
  };
  
  handleDrawerToggle = () => {
    this.setState(state => ({ isMobileOpen: !state.isMobileOpen }));
  };

  componentWillMount() {
    document.title = 'Learning Tensorflow-js'
  }

  render() {
    const { classes, theme } = this.props;
    const drawerInnerView = <DrawerInnerView
    />;
      
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
            >
              { titleForUrl[window.location.pathname] }
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.isMobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawerInnerView}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawerInnerView}
            </Drawer>
          </Hidden>
        </nav>
        <div className={classes.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const RoutedAppBar = withRouter(MyAppBar)
export default withStyles(styles, {withTheme: true})(RoutedAppBar);