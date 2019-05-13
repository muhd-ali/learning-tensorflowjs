import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import { WithStyles, withStyles, Typography, Card, CardContent, CardActionArea, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const styles = {
}

export interface DrawerInnerViewProps extends WithStyles<typeof styles> {
}
export interface State {
}

class DrawerInnerView extends React.Component<DrawerInnerViewProps, State> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardContent>
              <Link>
                <Typography
                  gutterBottom
                  variant='h6'
                  component="h2"
                  color='textSecondary'
                >
                  TensorFlow.js Experiments
                </Typography>
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
        <Divider />
        <List>
          <RouterLink to="/">
            <ListItem button key={'Homepage'}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={'Homepage'} />
            </ListItem>
          </RouterLink>
        </List>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerInnerView);