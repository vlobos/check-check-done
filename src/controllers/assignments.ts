import { Request, Response, Router } from 'express';

import { AssignModel } from "../models/assignments"

export class AssignController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getAll(res: Response): void {
    console.log("CONTROLLER: getAll");
    AssignModel.getAll((err: any, results: object)=>{
      if(err){
        throw err;
      }else{
        console.log("CONTROLLER: sending data!")
        let data = JSON.parse(results.toString());
        res.status(200).send({ data })
      }
    })
  }

  public getOne(req: Request, res: Response): void {
    // TO DO      
  }

  public postAssignment(req: Request, res: Response): void {
    // TO DO
  }

  // set up routes
  public routes() {
    this.router.get('/assignments', this.getAll);
    this.router.post('/assignments', this.postAssignment);
    this.router.get("/assignments/:id", this.getOne);
  }
}