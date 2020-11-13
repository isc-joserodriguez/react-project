import React, { Component, Fragment } from 'react';
import classes from './Person.module.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    render() {
        if (Math.random() < 0.1) {
            //throw new Error('Something went wrong');
        }
        console.log('[Person.js] rendering...')
        return (
            <WithClass classes={classes.Person}>
                < p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!!</p>
                < p > {this.props.children}</p >
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </WithClass>
        )
    }
};

export default Person;