import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Pages from './Pages'

const Router = () => {
        return(
        <React.Suspense fallback={<h1>Loading...</h1>}>
           <Switch>
               <Route path='/login' component={Pages.Login}/>
               <Route path='/signup' component={Pages.SignUp} />
               {/* <Redirect from='*' to='login'/> */}
               <Route path='/post' component={Pages.Post} />
           </Switch>

       </React.Suspense>
    )
}
export default Router;