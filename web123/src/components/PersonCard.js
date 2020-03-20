import React, { Component } from 'react';

const BirthDayButton = (props) => {
    return <button onClick={props.handleClick}>Birthday Button for {props.firstName}{props.lastName}</button>
}


class PersonCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            age : this.props.age
        }
    }

    handleClick = () => {
        this.setState(
            {
                age:this.state.age + 1
            }
        )
    }

    render() {
        return (<div>
                    <h3>{this.props.firstName},{this.props.lastName}</h3>
                    <h5>Age : {this.state.age}</h5>
                    <h5>Hair Color : {this.props.hairColor}</h5>
                    <BirthDayButton handleClick={this.handleClick} firstName={this.props.firstName} lastName={this.props.lastName}/>
                </div>);
    }
}
export default PersonCard;