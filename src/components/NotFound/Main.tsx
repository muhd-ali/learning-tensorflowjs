import React from 'react';
import { withStyles, WithStyles, Theme, Paper, Grid } from '@material-ui/core';
import PageTemplate from 'components/Templates/Paper/Main';

const styles = (theme: Theme) => ({
  toolbar: theme.mixins.toolbar,
});
export interface MainProps extends WithStyles<typeof styles> {
  theme: Theme,
}
class Main extends React.Component<MainProps, {}> {
  render() {
    let { classes, theme } = this.props;
    return (
      <PageTemplate theme={theme}>
        <div>
          <h1>Awww...Don’t Cry.</h1>
          <h2>"It's just a 404 Error!"</h2>
        </div>
      </PageTemplate>
    )
  }
}

export default withStyles(styles)(Main);