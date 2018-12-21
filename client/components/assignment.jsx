import React from "react";
import Task from "./task.jsx";

class Assignments extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showingTask: false
    }
  }

  toggleTasksView=()=>{
    //GET tasks
    let showingTask = this.state.showingTask
    this.setState({
      showingTask: !showingTask
    })
  }

  render(){
    let taskList = this.props.assignmentData.tasks
    return(
      <React.Fragment>
        <li onClick={this.toggleTasksView} className="assignment" id={`assignment__${this.props.assignmentData.id}`} name={this.props.index}>
          {this.props.assignmentData.assignment}
        </li>
        {this.state.showingTask && 
          <React.Fragment>
            <ul id="tasks__list">
              {taskList.map((task, index)=>{
                return <Task task={task} key={index}></Task>
              })}
            </ul>
            <div id="new__task">
              <input id={`task__input__${this.props.assignmentData.id}`} placeholder="New Task"></input>
              <button onClick={()=> {this.props.handleAddTask(this.props.assignmentData.id)}}>add</button> 
            </div>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }

}

export default Assignments;