import React, { Component } from 'react'


export class App extends Component {
  // Mounting only
  constructor() {
    // Super inherit all the functionalities of the Component class of REACT in our class
    super()
    this.state = {color:"red"};
    console.log("Constructor");
  }
  // Mounting and Updating
  // this function overwrite all the states values before or after the setState and only give the value passed through the component
  static getDerivedStateFromProps(props,state) {
    console.log("GetDrivedStateFromProp");

    // return {color:props.color}
    return{}
  }
  // Update --> tell weather the updation is going to happen or not, if it returns true then the states will change on seState function call otherwise if it return false then the states of that component will not chnage on setState function 
  shouldComponentUpdate(){
    console.log("ShouldComponentUpdate");
    return true
  }
  // This is called only after the first time the render function is run
  componentDidMount() {
    this.setState({color:"green"});
    console.log("ComponentDidMount"); 
  }
  // Update --> Store the values previous state or props
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("GetSnapshotBeforeUpdate", prevState.color);
    return{}
  }
  // Update --> after the updation is done in the dom
  componentDidUpdate(){
    console.log("ComponentDidUpdate")
  }

  // Mounting and Updating both
  render() {
    console.log("Render",this.state.color);
    return (
      <h1>Hello world  {this.state.color}</h1>
    )
  }
}

export default App



// import React, { Component } from 'react'

// class App extends Component {

//   constructor(props) {
//     console.log("Constructor")
//     super(props)
//     this.state = {
//       counter:0
//     }
//     this.increment = () => {this.setState({counter:this.state.counter+1})}
//     this.decrement = () => {this.setState({counter:this.state.counter-1})}
//   }

//   componentDidMount() {
//     console.log("componentDidMount")
//     console.log("-------------------")
//   }

//   render() {
//     console.log("Render")
//     return (
//       <div>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//         <h1>Counter {this.state.counter}</h1>
//       </div>
//     )
//   }
//   componentDidUpdate(prevProps,prevState,snapshot){
//     console.log('componenDidUpdate')
//     console.log("-------------")
//   }
// }




// export default App
