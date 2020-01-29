import React from "react";
import "./App.css";

//A state object with nested object or arrays
export class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      githubName:'ernest-sunday',
      topicVisited: [
        'html',
        'css',
        'javascript',
      ]
    }
  }
  render() {
    return(
      <div>
        Hello this is {this.state.githubName} learning programming and have touched the following {this.state.topicVisited}
      </div>
    )
  }

}

//updating state
export class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launcherClock()
    this.state= {
      currentTime: (new Date()).toLocaleString()
    }
  }
  launcherClock() {
    setInterval(() => {
      this.setState({
        currentTime:(new Date()).toLocaleString()
      })
    },1000)
  }
  render() {
    return(
      <div>{this.state.currentTime}</div>
    )
  }
}

export class Person extends React.Component {
  constructor(props) {
    super(props) 
    this.state= {
      userName: 'ernest-sunday',
      userEmail: 'sundayernestu615@gmail.com',
      userId:'2315320'
    }
  }
  updateVaues() {
    this.setState= ({userName:'sunny'});
  }
  render() {
    return(
      <div>
        This is my profile:
         <p>{this.state.userName}</p>
         <p>{this.state.userEmail}</p>
         <p>{this.state.userId}</p>
      </div>
    )
  }
}
