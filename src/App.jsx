import React from "react";
import "./App.css";


export class App extends React.Component {
  render() {
   return(
    <div>
      <h1 {...this.props}>
        Hello {this.props.frameworkName} world!!!
      </h1>
      <p>{this.props.title}</p>
    </div>
   )
  }
}

export class Content extends React.Component {
  getUrl() {
    return 'http://webapplog.com'
  }
  render() {
    return(
      <div>
        <p>The URL refered to you is:</p>
        <a href={this.getUrl()}>
          {this.getUrl()}
        </a>
      </div>
    )
  }
}
