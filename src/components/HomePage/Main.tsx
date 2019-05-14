import React from 'react';
import { withStyles, WithStyles, Theme, Typography, Divider, ListItem, List } from '@material-ui/core';
import PaperTemplate from 'components/Templates/Paper/Main';

const styles = (theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
});
interface MainProps extends WithStyles<typeof styles> {
    theme: Theme,
}

interface MainState {
}

class Main extends React.Component<MainProps, MainState> {
    render() {
        let { theme } = this.props;
        return (
            <PaperTemplate theme={theme}>
                <Typography variant='h4'>
                    Welcome
                </Typography>
                <br />
                <Typography variant='body1'>
                    The project is a react app that I made to play around with tensorflow.js.
                </Typography>
                <Divider />
                <br />
                <br />
                <Typography variant='h6'>
                    Features
                </Typography>
                <List>
                    <ListItem>
                        <Typography variant='body1'>
                            Using <a href='http://material-ui.com'>Material-UI</a> for GUI.
                </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='body1'>
                            Using <a href='https://github.com/ReactiveX/rxjs'>RxJS</a> for putting events on variable changes.
                </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='body1'>
                            Using <a href='https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd'>COCO-SSD</a> model for object detection.
                </Typography>
                    </ListItem>
                </List>
            </PaperTemplate>
        )
    }
}

export default withStyles(styles)(Main);