import React from 'react';
import { withStyles, WithStyles, Theme, Button, Typography } from '@material-ui/core';
import { LoadingNodeProps } from 'components/Templates/Loading/Main';
import cocoSsd from 'models/CocoSsd';
import img from 'images/img2.jpg';

const styles = (theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
});
type ChildProps = WithStyles<typeof styles> & LoadingNodeProps & {
    theme: Theme,
}

interface ChildState {

}

class Child extends React.Component<ChildProps, ChildState> {
    private canvasRef = React.createRef<HTMLCanvasElement>();
    private videoRef = React.createRef<HTMLVideoElement>();

    constructor(props: ChildProps) {
        super(props);
        this.initCamera();
    }

    async test() {
        // Load the model.
        const model = await cocoSsd.load();
        this.props.notifyParentThatLoadingFinished!();

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

    async initCamera() {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                facingMode: "user",
            }
        })
        const video = this.videoRef.current!
        video.srcObject = stream;
        video.onloadedmetadata = () => {
            video.play();
        };
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
        let { classes, theme } = this.props;
        return (
            <div>
                <video ref={this.videoRef} id="vid" width="300" height="300"></video>
                <canvas ref={this.canvasRef}
                    width="300" height="300"
                ></canvas>
            </div>
        )
    }
}

export default withStyles(styles)(Child);