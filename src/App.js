import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//function App() {
const App = props => {
    const [personsState, setPersonsState] = useState(
        {
            persons: [
                { name: 'José', age: 25 },
                { name: 'Carla', age: 25 },
                { name: 'Ramón', age: 29 }
            ]
        }
    );

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState,'-', otherState);

    const switchNameHandler = () => {
        //console.log('Was clicked');
        // DON'T DO THIS: this.state.persons[0].name='José Antonio';
        setPersonsState({
            persons: [
                { name: 'José Antonio', age: 25 },
                { name: 'Carla', age: 25 },
                { name: 'Ramón', age: 26 }
            ]
        });

    };

    return (
        <div className="App" >
            <h1 > Hi, I 'm a React App</h1>
            <p>This is really working! </p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
};
//return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));

export default App;