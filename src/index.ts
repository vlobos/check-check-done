import express, { Router } from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import cors from 'cors';

import { AssignController } from "./controllers/assignments";
const AssignRouter: AssignController = new AssignController();

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
    const corsOptions: cors.CorsOptions = {
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
      credentials: true,
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: "http://localhost:8000",
      preflightContinue: false
    };
    router.use(cors(corsOptions));

    this.app.use("/", router);
    this.app.get("/assignments", AssignRouter.router);
    this.app.post("/assignments", AssignRouter.router);  
  }

}

export default new Server().app;