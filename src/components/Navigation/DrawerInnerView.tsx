import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Home as HomeIcon, Settings as SettingsIcon, CameraAlt as CameraIcon, Photo as PhotoIcon  } from '@material-ui/icons';
import { withStyles, Typography, Card, CardContent, CardActionArea, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const styles = {
}

class DrawerInnerView extends React.Component<{}, {}> {
  render() {
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
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Homepage'} />
            </ListItem>
          </RouterLink>
          <RouterLink to="/realtime">
            <ListItem button key={'Real-Time'}>
              <ListItemIcon>
                <CameraIcon />
              </ListItemIcon>
              <ListItemText primary={'Real-Time'} />
            </ListItem>
          </RouterLink>
          <RouterLink to="/imageanalysis">
            <ListItem button key={'Image Analysis'}>
              <ListItemIcon>
                <PhotoIcon />
              </ListItemIcon>
              <ListItemText primary={'Image Analysis'} />
            </ListItem>
          </RouterLink>
          <RouterLink to="/settings">
            <ListItem button key={'Settings'}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={'Settings'} />
            </ListItem>
          </RouterLink>
        </List>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerInnerView);