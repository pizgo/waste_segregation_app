import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Navbar} from "./Navigation/Navbar";
import {Home} from "./Home/Home";
import {SearchForm} from "./SearchForm/SearchForm";
import {AddTrash} from "./AddTrash/AddTrash";
import {CollectionMap} from "./CollectionMap/CollectionMap";

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
                     <Route exact path="/CollectionMap">
                         <CollectionMap/>
                     </Route>
                 </Switch>
             </div>
         </BrowserRouter>
     </>
  )
}

