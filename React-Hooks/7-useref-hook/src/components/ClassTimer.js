import React, { Component } from 'react'

export class ClassTimer extends Component {

    inerval 

    constructor(props) {
      super(props)
    
      this.state = {
         timer: 0
      }
    }

    componentDidMount(){
        this.inerval = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 0.5}))
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
  render() {
    return (
      <div>
        class Timer - {this.state.timer}
        <button onClick={()=> clearInterval(this.inetrval)}>Clear Timer</button>
      </div>
    )
  }
}

export default ClassTimer
