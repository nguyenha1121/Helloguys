import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Questions } from '../api/questions.js';
import BodyQuestion from './BodyQuestion.js';
// Task component - represents a question
export default class Task extends Component {

    toggleChecked(e) {
        // let value = !e.target.value;
        // value
        // this.setState({value:1});
        // if(e.target.value===this.props.question.answer){
        //     this.props.handleScore(1);
        // }
        // else {
        //     this.props.handleScore(-1);
        //     this.setState({value:-1})
        // }

    }
    renderQuestion(){
       return this.props.question.text.map((answer,index)=> {
           <BodyQuestion key={index} answer={answer}/>

       });
    }
    render() {
     console.log(this.props.question.text.length);
        return (
            <div className="a">
                <h3>{this.props.bodyanswer}</h3><br/>
                <ol >{this.renderQuestion()}</ol>
                <h3>asidoajwd.</h3>
            </div>
        );
    }
}

Task.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
   question: PropTypes.object.isRequired,
    bodyanswer:PropTypes.string.isRequired,
    // listanswer:PropTypes.array.isRequired,
};