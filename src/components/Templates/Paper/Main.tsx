import React from 'react';
import { withStyles, WithStyles, Theme, Paper } from '@material-ui/core';

const styles = (theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
    paddingFix: {
        padding: '2em'
    }
});
interface MainProps extends WithStyles<typeof styles> {
    theme: Theme,
}

class Main extends React.Component<MainProps, {}> {    
    render() {
        let { classes } = this.props;
        return (
            <div className={classes.toolbar}>
                <Paper className={classes.paddingFix}>
                    {this.props.children}
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Main);