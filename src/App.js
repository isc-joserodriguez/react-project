import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//function App() {
class App extends Component {
    state = {
        persons: [
            { name: 'José', age: 25 },
            { name: 'Carla', age: 25 },
            { name: 'Ramón', age: 29 }
        ],
        otherState: 'some other value'
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

    //ADD render (){return JSX};
    render() {
        return (
            <div className="App" >
                <h1 > Hi, I 'm a React App</h1>
                <p>This is really working! </p>
                <button onClick={()=>this.switchNameHandler('José Antonio')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age} 
                    click={this.switchNameHandler.bind(this,'Carla')}>My Hobbies: Racing </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        );
    };
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));
};

export default App;


