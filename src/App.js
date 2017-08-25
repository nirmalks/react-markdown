import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textData : '',
      markedDownOutput: ''
    };

    this.handleTextDataChanged = this.handleTextDataChanged.bind(this);
  }

  handleTextDataChanged(event) {
    this.setState( { textData : event.target.value });
    this.setState({
      markedDownOutput: marked(this.state.textData)
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
        </div>

        <textarea placeholder="Enter your text" value= {this.state.textData} onChange={this.handleTextDataChanged}></textarea>
        <div>
          <h3>Markdown Output</h3>
          <div dangerouslySetInnerHTML={{ __html: (this.state.markedDownOutput || '')}}></div>
        </div>
      </div>
    );
  }
}

export default App;
