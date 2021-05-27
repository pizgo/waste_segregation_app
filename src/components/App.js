import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Navbar} from "./Navbar";
import {Home} from "./Home";
import {SearchForm} from "./SearchForm";
import {AddTrash} from "./AddTrash";

export const App = () => {
    return (
     <>
         <BrowserRouter>
             <Navbar />
             <div className="container">
                 <Switch>
                     <Route exact path="/">
                         <Home/>
                     </Route>
                     <Route exact path="/SearchForm">
                        <SearchForm/>
                     </Route>
                     <Route exact path="/AddTrash">
                         <AddTrash/>
                     </Route>
                 </Switch>
             </div>
         </BrowserRouter>
     </>
  )
}

