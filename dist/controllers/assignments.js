"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AssignController {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getAll(req, res) {
        //get all
        console.log("Assignment Controller: All");
        res.status(200).send({
            message: 'GET request successfulll!!!!'
        });
    }
    getOne(req, res) {
        //get one assignment to prepare task posting
        console.log("Getting one!!");
        res.status(200).send({
            message: 'GET ONE request successfulll!!!!'
        });
    }
    postAssignment(req, res) {
        //post
        console.log("Posting!!");
        res.status(200).send({
            message: 'POST request successfulll!!!!'
        });
    }
    // set up routes
    routes() {
        this.router.get('/assignments', this.getAll);
        this.router.post('/assignments', this.postAssignment);
        this.router.get("/assignments/:id", this.getOne);
    }
}
exports.AssignController = AssignController;
//# sourceMappingURL=assignments.js.map