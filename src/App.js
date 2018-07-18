import React, { Component } from 'react';
import eric from './images/idiot.png';
import './App.css';
import  Amplify, { Analytics }  from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';


Amplify.configure(aws_exports);

class App extends Component {

  openStartPage = () => {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return;
  }
  
  render() {
    Analytics.record('appRender');
    return (
      <div className="App">
        <header className="App-header">
          <img src={eric} className="App-logo" alt="logo" />
          <h1 className="App-title">CSheet</h1>
        </header>
        <p className="App-intro">
          yer a wizard, Harry
        </p>
        <button className="button-large" onClick={this.openStartPage}> go to hogwarts </button> <br />
        <a className="readMore" onClick={this.expandInfo}>read more stuff </a>
      </div>
    );
  }
}
export default App;
// export default withAuthenticator(App);
