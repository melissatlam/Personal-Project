import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Interviews from './Components/Interviews/Interviews';
import Feedback from './Components/Feedback/Feedback';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/dash' component={Dashboard} />
        <Route path='/interviews' component={Interviews} />
        <Route path='/profile' component={Profile} />
        <Route path='/feedback' component={Feedback} />

    </Switch>
)