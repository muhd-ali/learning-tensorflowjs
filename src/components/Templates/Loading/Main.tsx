import React from 'react';
import { withStyles, WithStyles, Theme } from '@material-ui/core';
import PageTemplate from 'components/Templates/Paper/Main';
import LoadingDiv from './LoadingDiv';

const styles = (theme: Theme) => ({
  toolbar: theme.mixins.toolbar,
});
interface MainProps extends WithStyles<typeof styles> {
  theme: Theme,
}

interface MainState {
  isChildLoaded: boolean[],
}

export interface LoadingNodeProps {
  notifyParentThatLoadingStarted?: () => void
  notifyParentThatLoadingFinished?: () => void
}

class Main extends React.Component<MainProps, MainState> {
  state = {
    isChildLoaded: new Array<boolean>(
      React.Children.count(this.props.children)
    ).fill(false),
  }

  childStartedLoading(index: number) {    
    const isChildLoaded = [...this.state.isChildLoaded];
    isChildLoaded[index] = false
    this.setState({
      isChildLoaded: isChildLoaded,
    });
  }

  childFinishedLoading(index: number) {
    const isChildLoaded = [...this.state.isChildLoaded];
    isChildLoaded[index] = true
    this.setState({
      isChildLoaded: isChildLoaded,
    });
  }

  areChildrenLoaded() {
    return this.state.isChildLoaded.reduce((prev, next) => prev && next, true);
  }

  render() {
    let { theme } = this.props;
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child, index) => {
        const childProps: LoadingNodeProps = {
          notifyParentThatLoadingStarted: () => this.childStartedLoading(index),
          notifyParentThatLoadingFinished: () => this.childFinishedLoading(index),
        }
        return React.cloneElement(
          child as React.ReactElement<any>,
          childProps
        );
      }
    );
    return (
      <PageTemplate theme={theme}>
        {!this.areChildrenLoaded() &&
          <LoadingDiv theme={theme} />
        }
        <div hidden={!this.areChildrenLoaded()}>
          {childrenWithProps}
        </div>
      </PageTemplate>
    )
  }
}

export default withStyles(styles)(Main);