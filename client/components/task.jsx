import React from "react";

class Tasks extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return ( 
      <li className="task">
        <div className="triangle"></div>
        <div className="task__text">{this.props.task.task}</div>
      </li>
    )
  }
}

export default Tasks;