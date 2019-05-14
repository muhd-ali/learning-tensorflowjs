import React from 'react';
import { withStyles, WithStyles, Theme, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme: Theme) => ({
  toolbar: theme.mixins.toolbar,
});
export interface MainProps extends WithStyles<typeof styles> {
  theme: Theme,
}
class Main extends React.Component<MainProps, {}> {
  render() {
    return (
        <div>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
          >
            <h1>Please wait...</h1>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <CircularProgress/>
          </Grid>
        </Grid>
        </div>
    )
  }
}

export default withStyles(styles)(Main);