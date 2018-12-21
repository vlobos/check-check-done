import React from "react";
import Assignment from "./assignment.jsx"
import axios from "axios";
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      assignmentId : '',
      assignmentList : []
    }
  }

  componentDidMount(){
    console.log("Component Did Mount")
    axios.get("http://localhost:8080/assignments")
    .then((response)=>{
      console.log("App comp. receiving ALL assignments.")
      let assignmentList = response.data.data;
      let assignmentId = assignmentList[assignmentList.length-1].id;
      console.log(assignmentId)
      this.setState({
        assignmentId: assignmentId,
        assignmentList: assignmentList
      })
    })
    .catch((error)=>{
      console.log("Error: ", error)
    })
  }


  handleAddAssignment=()=>{
//POST ASSIGNMENT then GET ASSIGNMENT

  let assignment = {
    id: this.state.assignmentId,
    assignment: document.getElementById("assignment__input").value,
    tasks: []
  }
  document.getElementById("assignment__input").value = "";
  let assignmentList = this.state.assignmentList
  assignmentList.push(assignment);
  axios.post("http://localhost:8080/assignments",{
    key: "assignments",
    value: assignmentList
  })
  .then((data)=>{
    console.log("AssignmentList: ", assignmentList)
    console.log("POSTED");
    console.log("Should be message: ", data)
  })
  .catch((error)=>{
    console.log("Error: ", error)
  })
  this.setState({
    assignmentId : this.state.assignmentId+1,
    assignmentList: assignmentList
  })
  };

  handleAddTask=(id)=>{
  //GET ASSIGNMENT
    let assignment = this.state.assignmentList[id-1];
    let taskList = assignment.tasks;
    let task = {
      task: document.getElementById(`task__input__${id}`).value,
      done: false,
    }
    document.getElementById(`task__input__${id}`).value = "";
    //POST TASK...UPDATE TASK??
    taskList.push(task);

    this.setState({
      assignmentList: this.state.assignmentList
    });
  };


  render(){
    return(
      <React.Fragment>
        <ul>
          {this.state.assignmentList.map((assignment, index) => {
            return <Assignment assignmentData={assignment} key={index} handleAddTask={this.handleAddTask}></Assignment>
          })}
        </ul>
        <div>
          <input id="assignment__input" placeholder="New Assignment"></input>
          <button onClick={this.handleAddAssignment}>Add</button>
        </div>
      </React.Fragment>
    )
  }
}

export default App;