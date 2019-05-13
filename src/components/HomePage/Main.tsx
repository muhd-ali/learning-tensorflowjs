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

interface MainState {
}

class Main extends React.Component<MainProps, MainState> {
    private canvasRef = React.createRef<HTMLCanvasElement>()
    

    async test() {
        // Load the model.
        const model = await cocoSsd.load();
        console.log('loaded');
    
        // Classify the image.
        const image = new Image();
        image.src = img;
        image.onload = (event) => {
            model.detect(image).then((predictions) => {
                const canvas = this.canvasRef.current!;
                const context = canvas.getContext('2d')!;
               
                for (const p of predictions) {
                    context.rect(...p.bbox)
                    context.stroke();
                }
            });
        }
    }

    componentDidMount() {
        const canvas = this.canvasRef.current!;
        const context = canvas.getContext('2d')!;        

        const image = new Image();
        image.src = img;
        image.onload = (event) => {
            context.drawImage(image, 0, 0);
        }
        this.test();
    }
    
    render() {
        let { classes } = this.props;
        return (
            <div className={classes.toolbar}>
                <Paper className={classes.paddingFix}>
                    <Typography variant='h1'>
                        Welcome
                    </Typography>
                    <canvas ref={this.canvasRef}
                        width="720" height="480"
                    ></canvas>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Main);