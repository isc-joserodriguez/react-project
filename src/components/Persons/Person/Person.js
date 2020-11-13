import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.module.css';

class Person extends Component {
    render() {
        if (Math.random() < 0.1) {
            //throw new Error('Something went wrong');
        }
        console.log('[Person.js] rendering...')
        return <Aux className={classes.Person}>
            < p key="i1" onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!!</p>
                < p key="i2" > {this.props.children}</p >
                <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
        </Aux>

    }
};

export default Person;