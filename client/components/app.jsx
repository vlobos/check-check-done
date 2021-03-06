import React from "react";
import Assignment from "./assignment.jsx"
import axios from "axios";
import "../styles/styles.css";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      assignmentId : 0,
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
      this.setState({
        assignmentId: assignmentId,
        assignmentList: assignmentList
      })
    })
    .catch((error)=>{
      console.log("Error: ", error)
    })
  }

  postAssignment = (assignmentList, increase) =>{
    axios.post("http://localhost:8080/assignments", assignmentList)
    .then(()=>{
      console.log("POSTED");
    })
    .catch((error)=>{
      console.log("Error: ", error)
    })
    this.setState({
      assignmentId : this.state.assignmentId+increase,
      assignmentList: assignmentList
    })
  }

  handleAddAssignment=()=>{
  //POST ASSIGNMENT
    let assignment = {
      id: this.state.assignmentId+1,
      assignment: document.getElementById("assignment__input").value,
      tasks: []
    }
    document.getElementById("assignment__input").value = "";
    let assignmentList = this.state.assignmentList
    assignmentList.push(assignment);
    this.postAssignment(assignmentList, 1);
  };

  //id parameter supplied at task.jsx
  handleAddTask=(id)=>{
    let assignment = this.state.assignmentList[id-1];
    let taskList = assignment.tasks;
    let task = {
      task: document.getElementById(`task__input__${id}`).value,
      done: false,
    }
    document.getElementById(`task__input__${id}`).value = "";

    taskList.push(task);
    let assignmentList = this.state.assignmentList;
    this.postAssignment(assignmentList, 0);
  };


  render(){
    return(
      <React.Fragment>
        <aside className="container__col">
          <div id="title">Check, check, done!</div>
          <div id="new__assignment">
            <input id="assignment__input" placeholder="New Assignment"></input>
            <button onClick={this.handleAddAssignment}>add</button>
          </div>
        </aside>
        <main className="container__col">
          <ul id="assignments__list">
            {this.state.assignmentList.map((assignment, index) => {
              return <Assignment assignmentData={assignment} key={index} handleAddTask={this.handleAddTask}></Assignment>
            })}
          </ul>
        </main>
      </React.Fragment>
    )
  }
}

export default App;