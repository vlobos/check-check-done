import { Request, Response, Router } from 'express';

export class TaskController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public postTask(req: Request, res: Response): void {
  //post
  console.log("Task Posting!!")
  res.status(200).send({
    message: 'POST request successfulll! Task'
  })
  }

  // set up routes
  public routes() {
    this.router.post('/tasks', this.postTask);
  }
}