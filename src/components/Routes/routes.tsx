import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from 'components/NotFound/Main';
import HomePage from 'components/HomePage/Main';

function Routes() {
    return <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='*' component={NotFoundPage} />
    </Switch>;
}

export default Routes;
