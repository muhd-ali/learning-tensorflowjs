import React from 'react';
import { withStyles, WithStyles, Theme, Paper, Grid, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import img from 'images/img2.jpg'

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