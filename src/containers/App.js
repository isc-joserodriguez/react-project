import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

//function App() {
class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor')
    }

    state = {
        persons: [
            { id: 'asdads', name: 'José', age: 25 },
            { id: 'asdasds', name: 'Carla', age: 25 },
            { id: 'gththt', name: 'Ramón', age: 29 },
            { id: '56egf4', name: 'Mario', age: 26 },
            { id: '5tyhgfs', name: 'Luigi', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    /* componentWillMount(){
        console.log('[App.js] componentWillMount');
    } */

    componentDidMount() {
        console.log('[App.js] component Did Mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    //ADD render (){return JSX};
    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />;
        }

        return (
            <div className={classes.App} >
                <button onClick={() => this.setState({ showCockpit: !this.state.showCockpit })}>Remove Cockpit</button>
                {this.state.showCockpit ? <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler} /> : null}
                {persons}
            </div>
        );
    };
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));
};

export default App;


