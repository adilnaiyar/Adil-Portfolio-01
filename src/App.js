import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Circles from './components/circles/circles.components';
import Sidebar from './components/sidebar/sidebar.components'; 
import Navbar from './components/Navbar/navbar.components';
import About from './components/about/about.components';
import Resume from './components/Resume/resume.components';
import Project from './components/project/project.components';

const App = () => {
  const location = useLocation();

  return (
      <div className="App">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app_main_content">
              <Navbar />
              <AnimatePresence exitBeforeEnter>
                <Switch location={ location } key={ location.key }>
                  <Route exact path = '/' component = { About } />
                  <Route path = '/resume' component = { Resume } />
                  <Route path = '/projects' component = { Project } />
                  <Route>
                    <Redirect to="/" />
                  </Route>                
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <Circles />
      </div>
  );
}

export default App;
