import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id :'',
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
    this.setState({
      answers:{
        q1:'A',
        q2:'A',
        q3:'A',
        q4:'A',
        q5:'A'
      },
      submitted:true
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
        <input type="radio" name ="q1" value ="extremelyWell"/>Extremely well<br/>
        <input type="radio" name ="q1" value ="veryWell"/>Very well<br/>
        <input type="radio" name ="q1" value ="somewhatWell"/>Somewhat well<br/>
        <input type="radio" name ="q1" value ="notSoWell"/>Not so well<br/>
        <input type="radio" name ="q1" value ="notAtAllWell"/>Not at all well<br/><br/>

        <label>2.How easy was it to find what you were  looking for on our website?</label><br/>
        <input type="radio" name ="q2" value ="extremelyEasy"/>Extremely easy<br/>
        <input type="radio" name ="q2" value ="veryEasy"/>Very easy<br/>
        <input type="radio" name ="q2" value ="somewhatEasy"/>Somewhat easy<br/>
        <input type="radio" name ="q2" value ="notSoEasy"/>Not so easy<br/>
        <input type="radio" name ="q2" value ="notAtAllEasy"/>Not at all easy<br/><br/>

        <label>3.Did it take you more or less time than you expeted to find what you were looking for on our website</label><br/>
        <input type="radio" name ="q3" value ="ALotLessTime"/>A lot less time<br/>
        <input type="radio" name ="q3" value ="ALittleLessTime"/>A little less time<br/>
        <input type="radio" name ="q3" value ="AboutWhatIExpected"/>About what I expected<br/>
        <input type="radio" name ="q3" value ="ALittleMoreTime"/>A little more time<br/>
        <input type="radio" name ="q3" value ="ALotMoreTime"/>A lot more time<br/><br/>

        <label>4.How visually applealling is our website?</label><br/>
        <input type="radio" name ="q4" value ="extremelyApplealing"/>Extremely applealing<br/>
        <input type="radio" name ="q4" value ="veryApplealing"/>Very applealing<br/>
        <input type="radio" name ="q4" value ="somewhatApplealing"/>Somewhat applealing<br/>
        <input type="radio" name ="q4" value ="notSoApplealing"/>Not so applealing<br/>
        <input type="radio" name ="q4" value ="notAtAllApplealing"/>Not at all applealing<br/><br/>

        <label>5.How easy is it to understand the information on our website?</label><br/>
        <input type="radio" name ="q5" value ="extremelyEasy"/>Extremely easy<br/>
        <input type="radio" name ="q5" value ="veryEasy"/>Very easy<br/>
        <input type="radio" name ="q5" value ="somewhatEasy"/>Somewhat easy<br/>
        <input type="radio" name ="q5" value ="notSoEasy"/>Not so easy<br/>
        <input type="radio" name ="q5" value ="notAtAllEasy"/>Not at all easy<br/><br/>

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
