"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class TaskController {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    postTask(req, res) {
        //post
        console.log("Task Posting!!");
        res.status(200).send({
            message: 'POST request successfulll! Task'
        });
    }
    // set up routes
    routes() {
        this.router.post('/tasks', this.postTask);
    }
}
exports.TaskController = TaskController;
//# sourceMappingURL=tasks.js.map