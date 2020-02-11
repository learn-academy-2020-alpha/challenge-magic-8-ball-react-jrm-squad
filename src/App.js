import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ["For sure", "Definitely Not", "Maybe so", "Why not?", "Good luck!"],
      question: "",
      answer: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // randomize a number to correspond with the array

    // Update the return statement below to reflect the outcome of your code.
    let randomNumber = Math.floor(Math.random() * answerArray.length)
    return answerArray[randomNumber]
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    this.setState({ answer: this.getAnswer() })
  }

  reset = () =>{
    this.setState({ question: "" })
    this.setState({ answer: "" })
  }

  render(){
    return (
      <div>
        <h1>Magic Crystal Ball</h1>
        <input
          id="inputBox"
          type='text'
          value={this.state.question}
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Crystal Ball a Question
        </button>
        <button id="resetBtn" onClick={ this.reset }>
          Reset
        </button>
        <div id="image-container">
            <img id="crystalball" src={"http://res.publicdomainfiles.com/pdf_view/83/13939484418677.png"} alt="crystal ball">
            </img>
            <p id="answerBox"> { this.state.answer } </p>
        </div>
      </div>
    )
  }
}

export default App;
