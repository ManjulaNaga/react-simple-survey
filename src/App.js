import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid';
import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyB8uATZRbcUpVKPAylQ7H3NA_XTRr70X0c",
   authDomain: "reactsimplesurvey-489ef.firebaseapp.com",
   databaseURL: "https://reactsimplesurvey-489ef.firebaseio.com",
   projectId: "reactsimplesurvey-489ef",
   storageBucket: "reactsimplesurvey-489ef.appspot.com",
   messagingSenderId: "920712650132"
 };
 firebase.initializeApp(config);


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id :uuid.v1(),
      name:'',
      answers:{
        q1:'',
        q2:'',
        q3:'',
        q4:'',
        q5:''
      },
      submitted:false
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this);

  }
  handleSubmit(e){
    e.preventDefault();
    var name = this.refs.name.value;
    this.setState({
      name:name
    },function(){
      console.log(this.state);
    });
  }
  handleSurveySubmit(e){
    e.preventDefault();
    firebase.database().ref('surveys/'+this.state.id).set({
      name:this.state.name,
      answers:this.state.answers
    });
    this.setState({
      submitted:true
    },function(){
      console.log(this.state);
    });

  }
  handleQuestionChange(e){
    e.preventDefault();
    var answers = this.state.answers;
    if(e.target.name === 'q1'){
        answers.q1 = e.target.value;
    }else if(e.target.name === 'q2'){
        answers.q2 = e.target.value;
    }else if(e.target.name === 'q3'){
        answers.q3 = e.target.value;
    }else if(e.target.name === 'q4'){
        answers.q4 = e.target.value;
    }else if(e.target.name === 'q5'){
        answers.q5 = e.target.value;
    }
    this.setState({answers:answers},function(){
      console.log(this.state);
    });
  }
  render() {
    var user;
    var questions;
    if(this.state.name && this.state.submitted === false){
      user = <h2><center>Welcome {this.state.name}</center></h2>
      questions = <span className="questions">
        <h3 ><center> Survey Questions</center></h3>
        <form onSubmit={this.handleSurveySubmit.bind(this)}>
        <label>1.Overall, how does our website meet your needs</label><br/>
        <input type="radio" name ="q1" value ="extremelyWell" onChange ={this.handleQuestionChange}/>Extremely well<br/>
        <input type="radio" name ="q1" value ="veryWell" onChange ={this.handleQuestionChange}/>Very well<br/>
        <input type="radio" name ="q1" value ="somewhatWell" onChange ={this.handleQuestionChange}/>Somewhat well<br/>
        <input type="radio" name ="q1" value ="notSoWell" onChange ={this.handleQuestionChange}/>Not so well<br/>
        <input type="radio" name ="q1" value ="notAtAllWell" onChange ={this.handleQuestionChange}/>Not at all well<br/><br/>

        <label>2.How easy was it to find what you were  looking for on our website?</label><br/>
        <input type="radio" name ="q2" value ="extremelyEasy" onChange ={this.handleQuestionChange}/>Extremely easy<br/>
        <input type="radio" name ="q2" value ="veryEasy" onChange ={this.handleQuestionChange}/>Very easy<br/>
        <input type="radio" name ="q2" value ="somewhatEasy" onChange ={this.handleQuestionChange}/>Somewhat easy<br/>
        <input type="radio" name ="q2" value ="notSoEasy" onChange ={this.handleQuestionChange}/>Not so easy<br/>
        <input type="radio" name ="q2" value ="notAtAllEasy" onChange ={this.handleQuestionChange}/>Not at all easy<br/><br/>

        <label>3.Did it take you more or less time than you expeted to find what you were looking for on our website</label><br/>
        <input type="radio" name ="q3" value ="ALotLessTime" onChange ={this.handleQuestionChange}/>A lot less time<br/>
        <input type="radio" name ="q3" value ="ALittleLessTime" onChange ={this.handleQuestionChange}/>A little less time<br/>
        <input type="radio" name ="q3" value ="AboutWhatIExpected" onChange ={this.handleQuestionChange}/>About what I expected<br/>
        <input type="radio" name ="q3" value ="ALittleMoreTime" onChange ={this.handleQuestionChange}/>A little more time<br/>
        <input type="radio" name ="q3" value ="ALotMoreTime" onChange ={this.handleQuestionChange}/>A lot more time<br/><br/>

        <label>4.How visually applealling is our website?</label><br/>
        <input type="radio" name ="q4" value ="extremelyApplealing" onChange ={this.handleQuestionChange}/>Extremely applealing<br/>
        <input type="radio" name ="q4" value ="veryApplealing" onChange ={this.handleQuestionChange}/>Very applealing<br/>
        <input type="radio" name ="q4" value ="somewhatApplealing" onChange ={this.handleQuestionChange}/>Somewhat applealing<br/>
        <input type="radio" name ="q4" value ="notSoApplealing" onChange ={this.handleQuestionChange}/>Not so applealing<br/>
        <input type="radio" name ="q4" value ="notAtAllApplealing onChange ={this.handleQuestionChange}"/>Not at all applealing<br/><br/>

        <label>5.How easy is it to understand the information on our website?</label><br/>
        <input type="radio" name ="q5" value ="extremelyEasy" onChange ={this.handleQuestionChange}/>Extremely easy<br/>
        <input type="radio" name ="q5" value ="veryEasy" onChange ={this.handleQuestionChange}/>Very easy<br/>
        <input type="radio" name ="q5" value ="somewhatEasy" onChange ={this.handleQuestionChange}/>Somewhat easy<br/>
        <input type="radio" name ="q5" value ="notSoEasy" onChange ={this.handleQuestionChange}/>Not so easy<br/>
        <input type="radio" name ="q5" value ="notAtAllEasy" onChange ={this.handleQuestionChange}/>Not at all easy<br/><br/>

        <button className ="right" type="submit">Submit</button>
      </form>
  </span>
    }
    else if(!this.state.name && this.state.submitted === false){
      user = <span><center>
                <h2>
                  Please enter your name to begin the survey
                </h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <input type="text" placeholder="Enter the name" ref = "name"/>
                </form>
                </center>
              </span>;
      questions ='';
    }
    else{
      user =  <span><center><h3>
                Thank you for your survey {this.state.name}.<br/>have a nice day<br/>
                </h3></center>
              </span>
    }

    return (
      <div >
        <header className="App-header">
          <p>
            Simple survey
          </p>
        </header>
        <div>
          {user}
          {questions}
        </div>
      </div>
    );
  }
}

export default App;
