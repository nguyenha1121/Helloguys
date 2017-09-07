import React,{Component} from 'react';
import Task from './Task.js';
import ReactDOM from 'react-dom';

import { createContainer } from 'meteor/react-meteor-data';
import {Questions} from "../api/questions.js";
import PropTypes from 'prop-types';
 class App extends Component {
     constructor(props) {
         super(props);
         this.state = {
             hideCompleted: false,
         };
     }
     handleSubmit(event) {
         event.preventDefault();

         // Find the name via the React ref
         const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        // Questions.insert({text,createdAt: new Date(), // current time
         //});
         // Clear form
       //  ReactDOM.findDOMNode(this.refs.textInput).value = '';
     }
    renderQuestions(){
         console.log('do dai mang :' + this.props.tasks.length)
        return this.props.tasks.map((question,index)=>(
            <Task key={index} question={question} bodyanswer={question.bodyanswer} />
        ));
    }
    render() {
        return (
            <div className="container">
                <header>
                    <form className="new-task" >
                        <input type="text" ref="textInput" placeholder="Please your name "/>
                        <input type="text" ref="score"  />
                        <input type="button" value="submit" onClick={this.handleSubmit.bind(this)} />
                    </form>
                    <ul>{this.renderQuestions()}</ul>
                </header>
            </div>
        );
    }

}
App.propTypes ={
    tasks:PropTypes.array.isRequired,
    score:PropTypes.number,
};
export  default  createContainer(()=>{
    return {
        tasks: Questions.find({}).fetch(),
        //score:Questions.find({ answer: { $gt: this.props.question.answer }}).fetch(),
    };
},App);

// db.question0.insert({_id:'123',bodyanswer:'this is question 1' text:['this is answer1','this is answer2','this is answer3','this is answer4'], createdAt: new Date() });