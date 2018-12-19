import express, { Router } from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as cors from 'cors';

import { AssignController } from "./controllers/assignments";
const AssignRouter: AssignController = new AssignController();
import { TaskController } from "./controllers/tasks";
const TaskRouter: TaskController = new TaskController();


//server class
class Server {
  
  public app: express.Application;
  
  constructor(){
    //create expressjs application
    this.app = express();
    //configure application
    this.config();
    
    this.routes();
  }
  
  public config(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(express.static(path.resolve(__dirname, "../public")));
    
    this.app.listen(8080, ()=>{
      console.log("Listening on Port 8080.")
    })
  }

  public routes(): void {
    const router: express.Router = express.Router();
    this.app.use("/", router);
    this.app.get("/assignments", AssignRouter.router);
    this.app.get("/assignments/:id", AssignRouter.router);
    this.app.post("/assignments", AssignRouter.router);  
    this.app.post("/tasks", TaskRouter.router);
  }

}

export default new Server().app;