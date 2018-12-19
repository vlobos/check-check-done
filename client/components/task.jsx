import React from "react";

class Tasks extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return ( 
      <li>{this.props.task.task}</li>
    )
  }
}

export default Tasks;