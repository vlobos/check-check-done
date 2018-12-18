import express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";

//server class
class Server {

  public app: express.Application;

  constructor(){
    //create expressjs application
    this.app = express();
    //configure application
    this.config();
  }

  public config(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    this.app.use(express.static(path.resolve(__dirname, "../public")));

    this.app.listen(8080, ()=>{
      console.log("Listening on Port 8080.")
    })
  }
}

export default new Server().app;