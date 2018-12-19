import { Request, Response, Router } from 'express';

export class AssignController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getAll(req: Request, res: Response): void {
//get all
    console.log("Assignment Controller: All");
    res.status(200).send({
      message: 'GET request successfulll!!!!'
  })
  }

  public getOne(req: Request, res: Response): void {
    //get one assignment to prepare task posting
    console.log("Getting one!!")
    res.status(200).send({
      message: 'GET ONE request successfulll!!!!'
    })
  }

  public postAssignment(req: Request, res: Response): void {
//post
  console.log("Posting!!")
  res.status(200).send({
    message: 'POST request successfulll!!!!'
  })
  }

  // set up routes
  public routes() {
    this.router.get('/assignments', this.getAll);
    this.router.post('/assignments', this.postAssignment);
    this.router.get("/assignments/:id", this.getOne);
  }
}