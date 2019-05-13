import React from 'react';
import { withStyles, WithStyles, Theme, Paper, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
});
export interface MainProps extends WithStyles<typeof styles> {
    theme: Theme,
  }
class Main extends React.Component<MainProps, {}> {
  render() {
      let {classes} = this.props;
      return (
        <div className={classes.toolbar}>
            <Grid container spacing={24}>
                <Grid item xs>
                    <Paper>
                        <div style={{padding : '20px'}}>
                          <h1>Please Wait</h1>
                          <CircularProgress/>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
      )
  }
}

export default withStyles(styles)(Main);