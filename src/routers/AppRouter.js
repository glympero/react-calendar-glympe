//Exports a React Component
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashBoard from '../components/DashBoard';

import AboutPage from '../components/AboutPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
  
  
 const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={DashBoard} exact={true} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

  export default AppRouter;