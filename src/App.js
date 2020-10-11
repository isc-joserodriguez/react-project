import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
    return (
        <div className="App" >
            <h1 > Hi, I 'm a React App</h1>
            <p>This is really working! </p>
            <Person name="José" age="25" />
            <Person name="Carla" age="25" >My Hobbies: Racing </Person>
            <Person name="Ramón" age="25" />
        </div>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));
}

export default App;