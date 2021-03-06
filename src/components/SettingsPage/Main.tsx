import React from 'react';
import { withStyles, WithStyles, Theme, Typography } from '@material-ui/core';
import PageTemplate from 'components/Templates/Paper/Main';

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
            <PageTemplate theme={theme}>
                <Typography variant='h1'>
                    Settings
                    </Typography>
            </PageTemplate>
        )
    }
}

export default withStyles(styles)(Main);