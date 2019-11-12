import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import PrintData from "../components/printData";

class Index extends Component{
    render(){
        return(
             <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <App/>
                    </Route>
                    <Route path="/print">
                        <PrintData/>
                    </Route>
                </Switch>
             </BrowserRouter>
        )
    }
}
export default Index;