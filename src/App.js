import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//function App() {
class App extends Component {
    state = {
        persons: [
            { name: 'José', age: 25 },
            { name: 'Carla', age: 25 },
            { name: 'Ramón', age: 29 },
            { name: 'Mario', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        //console.log('Was clicked');
        // DON'T DO THIS: this.state.persons[0].name='José Antonio';
        this.setState({
            persons: [
                { name: newName, age: 25 },
                { name: 'Carla', age: 25 },
                { name: 'Ramón', age: 26 }
            ]
        });

    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'José Antonio', age: 25 },
                { name: event.target.value, age: 25 },
                { name: 'Ramón', age: 26 }
            ]
        });
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    //ADD render (){return JSX};
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div >
                    {this.state.persons.map(person => {
                        return <Person
                            name={person.name}
                            age={person.age} />
                    })}

                </div>
            );
        }

        return (
            <div className="App" >
                <h1 > Hi, I 'm a React App</h1>
                <p>This is really working! </p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons</button>

                {persons}
            </div>
        );
    };
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));
};

export default App;


