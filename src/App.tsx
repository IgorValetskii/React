import React, {Component} from 'react';
import './App.css';
import ShowUsers from "./users/users";
import {TextField} from './textField';

const App : React.FC = () => {
        return (

            <div>
                <TextField text='Hello' person={{firstName:'Sadio', lastName: 'Mane' }}
                           handleChange={event => {

                           }}/>
                {/*<h1>Welcome to SuperLeague!</h1>*/}
                {/*<button className="button">Show Users</button>*/}
                {/*<ShowUsers firstName="Sadio" lastName="Mane"/>*/}
            </div>
        );
};

export default App;
