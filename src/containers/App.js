import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

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
            { id: 'gththt', name: 'Ramón', age: 29 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
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

        this.setState((prevState, props) => {
            return { persons: persons, changeCounter: prevState.changeCounter + 1 };
        });
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

    loginHandler = () => {
        this.setState({ authenticated: true });
    }

    //ADD render (){return JSX};
    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
                isAuthenticated={this.state.authenticated} />;
        }

        return (
            <Aux>
                <button onClick={() => this.setState({ showCockpit: !this.state.showCockpit })}>Remove Cockpit</button>
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler
                    }}>
                    {this.state.showCockpit ? <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonHandler} /> : null}
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    };
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!!!'));
};

export default withClass(App, classes.App);


