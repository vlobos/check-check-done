"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const assignments_1 = require("../models/assignments");
class AssignController {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getAll(req, res) {
        console.log("CONTROLLER: getAll");
        assignments_1.AssignModel.getAll((err, results) => {
            if (err) {
                throw err;
            }
            else {
                console.log("CONTROLLER: sending data!");
                let data = JSON.parse(results.toString());
                res.status(200).send({ data });
            }
        });
    }
    getOne(req, res) {
        // TO DO      
    }
    postAssignment(req, res) {
        // TO DO
        let assignment = req.body;
        assignments_1.AssignModel.postAssignment(assignment, (err, results) => {
            if (err) {
                throw err;
            }
            else {
                console.log("CONTROLLER: Posting data!");
                res.status(200);
            }
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