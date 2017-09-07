/**
 * Created by nguyennam on 9/3/17.
 */
import React, { Component} from 'react';
import PropTypes from 'prop-types';
export default class BodyQuestion extends Component {
    constructor(props){
        super(props);
        console.log(props.answer);
    }
    render(){
        console.log(this.props.answer);
        return(
            <li className="bbb">
                {this.props.answer}
            </li>

        )
    }
}
BodyQuestion.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    answer :PropTypes.string.isRequired,
    // listanswer:PropTypes.array.isRequired,
};