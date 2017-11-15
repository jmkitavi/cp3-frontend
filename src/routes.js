import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import BucketListsPage from './components/bucketlists/BucketListsPage';
import Items from './components/bucketlists/Items';

import LoginPage from './components/login/LoginPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={BucketListsPage} />
        <Route path="about" component={Items} />
        <Route path="login" component={LoginPage} />
    </Route>
);
