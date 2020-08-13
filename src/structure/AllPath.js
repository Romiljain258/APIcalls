import React from "react";
import NewApi from '../api/NewApi';
import HnApi from '../api/HnApi';
import AskApi from '../api/AskApi';
import ShowApi from '../api/ShowApi';
import PastApi from '../api/PastApi';
import CommentsApi from '../api/CommentsApi';
import AllFile from './AllFile';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';

class AllPath extends React.Component{
    render(){
        return(
            <div className="client">
      <Router>
           <AllFile/>
           <Switch>
               <Route exact path='/' component={HnApi}/>
               <Route exact path='/new' component={NewApi}/>
               <Route exact path='/past' component={PastApi}/>
               <Route exact path='/comment' component={CommentsApi}/>
               <Route exact path='/job' component={AskApi}/>
               <Route exact path='/show' component={ShowApi}/>
           </Switch> 
      </Router>
      </div>
        );
    }
}
export default AllPath;