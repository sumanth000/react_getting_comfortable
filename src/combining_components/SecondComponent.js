
import { Component } from "react";
import comstyles from './css_folder/first&secondComp.module.css'

class SecondComponent extends Component {
    constructor(props) {
      super(props);// this is must to call the parent contructor, here it is react.Component
      this.state = {
        count: 0
      };
    }
  
    handleClick = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <div>
          <div className={comstyles.container}>
          <h2>CLASS COMPONENT</h2>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleClick}>Increment</button>
          </div>
          
        </div>
      );
    }
  }
  
  export default SecondComponent;