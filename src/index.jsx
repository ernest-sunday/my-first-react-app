import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {Content} from "./App"



ReactDOM.render(<App  
                id={'ember'} 
                frameworkName={'Ember.js'}
                title={'A framework for creating ambitious web applications.'} 
                />,
                document.getElementById('root'));

ReactDOM.render(<Content />,document.getElementById('content'));
        
        







 
