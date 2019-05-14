import React from 'react';
import { withStyles, WithStyles, Theme } from '@material-ui/core';
import LoadingTemplate from 'components/Templates/Loading/Main';
import Child from './Child';

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
            <LoadingTemplate theme={theme}>
                <Child theme={theme}/>
            </LoadingTemplate>
        )
    }
}

export default withStyles(styles)(Main);