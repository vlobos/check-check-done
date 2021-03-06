import { Request, Response, Router } from 'express';

import { AssignModel } from "../models/assignments"

export class AssignController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getAll(req: Request, res: Response): void {
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

  public postAssignment(req: Request, res: Response): void {
    // TO DO
    let assignment = req.body;
    AssignModel.postAssignment(assignment, (err: any, results: object)=>{
      if(err){
        throw err;
      }else{
        console.log("CONTROLLER: Posting data!");
        res.status(200);
      }
    })
  }

  // set up routes
  public routes() {
    this.router.get('/assignments', this.getAll);
    this.router.post('/assignments', this.postAssignment)
  }
}