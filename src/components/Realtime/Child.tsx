import React from 'react';
import { withStyles, WithStyles, Theme, Grid } from '@material-ui/core';
import { LoadingNodeProps } from 'components/Templates/Loading/Main';
import cocoSsd from 'models/CocoSsd';
import { ObjectDetection, DetectedObject } from '@tensorflow-models/coco-ssd';

const styles = (theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
});
type ChildProps = WithStyles<typeof styles> & LoadingNodeProps & {
    theme: Theme,
}

class Child extends React.Component<ChildProps, {}> {
    private canvasRef = React.createRef<HTMLCanvasElement>();
    private videoRef = React.createRef<HTMLVideoElement>();
    private dims = [1000, 720];
    private stream?: MediaStream;

    renderPredictions(predictions: DetectedObject[]) {
        
        const video = this.videoRef.current!
        const canvas = this.canvasRef.current!;
        if (!video || !canvas) return;
        const ctx = canvas.getContext("2d")!;
        canvas.width = this.dims[0];
        canvas.height = this.dims[1];
        ctx.clearRect(0, 0, this.dims[0], this.dims[1]);
        // Fonts
        const font = "16px sans-serif";
        ctx.font = font;
        ctx.textBaseline = "top";
        ctx.drawImage(video, 0, 0, this.dims[0], this.dims[1]);
        predictions.forEach(prediction => {
            // Bounding box
            ctx.strokeStyle = "#00FFFF";
            ctx.lineWidth = 2;
            ctx.strokeRect(...prediction.bbox);
            // Label background
            ctx.fillStyle = "#00FFFF";
            const textWidth = ctx.measureText(prediction.class).width;
            const textHeight = parseInt(font, 10); // base 10
            const x = prediction.bbox[0];
            const y = prediction.bbox[1];
            ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
        });
        predictions.forEach(prediction => {

            const x = prediction.bbox[0];
            const y = prediction.bbox[1];
            ctx.fillStyle = "#000000";
            ctx.fillText(prediction.class, x, y);
        });
    };

    startDetection(model: ObjectDetection) {
        const video = this.videoRef.current!
        if (!video) return;   
        model.detect(video).then(predictions => {
            this.renderPredictions(predictions);
            requestAnimationFrame(() => {
                this.startDetection(model);
            });
        });
    }

    async realTimeTracking() {
        // Load the model.
        const model = await cocoSsd.load();
        this.props.notifyParentThatLoadingFinished!();
        this.initCamera();
        this.startDetection(model);
    }

    async initCamera() {
        this.stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                facingMode: "user",
            }
        })
        const video = this.videoRef.current!
        if (!video) return;
        video.srcObject = this.stream;
        video.onloadedmetadata = () => {
            video.play();
        };
    }

    componentDidMount() {
        this.realTimeTracking();
    }

    componentWillUnmount() {
        if (this.stream) {
            this.stream!.getVideoTracks()[0].stop();
        }
    }

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
                        <video hidden ref={this.videoRef} width={this.dims[0]} height={this.dims[1]}/>
                        <canvas ref={this.canvasRef} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Child);