import React from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';
import Pages from './Pages'
    const Router = () => {
        return (
            <React.Suspense fallback={<h1>Loading.....</h1>}>
                <Switch>
                    <Route path= '/login' component={Pages.Login} />
                    <Route path= '/signUp' component={Pages.SignUp} />
                    <Redirect from= '*' to ='/page-not-found' />
                </Switch> 
            </React.Suspense>
           
        )
    }
export default Router