import React from 'react';
import { withStyles, WithStyles, Theme, Typography, Divider, ListItem, List, Grid } from '@material-ui/core';
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
                <Grid
                    container
                    spacing={24}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant='h4'>
                            Welcome
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            The project is a react app that I made to play around with tensorflow.js.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Divider />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant='h6'>
                            Technologies
                        </Typography>
                        <List>
                            <ListItem>
                                <Typography variant='body1'>
                                    <a href='https://github.com/microsoft/TypeScript'>Typescript</a> for strictly typed code.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='body1'>
                                    <a href='https://www.tensorflow.org/js'>TensorFlow.js</a> for AI toolset.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='body1'>
                                    <a href='http://material-ui.com'>Material-UI</a> for GUI.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='body1'>
                                    <a href='https://github.com/ReactiveX/rxjs'>RxJS</a> for putting events on variable changes.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant='body1'>
                                    <a href='https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd'>COCO-SSD</a> model for object detection.
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Divider />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant='h6'>
                            Github Repo
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            <a href='https://github.com/muhd-ali/learning-tensorflowjs'>
                                https://github.com/muhd-ali/learning-tensorflowjs
                            </a>
                        </Typography>
                    </Grid>
                </Grid>
            </PaperTemplate>
        )
    }
}

export default withStyles(styles)(Main);