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
        //get all
        //request will be the name of the object saved into localstorage...the key...
        console.log("CONTROLLER: getAll");
        assignments_1.AssignModel.getAll((err, results) => {
            if (err) {
                throw err;
            }
            else {
                console.log(typeof results, " TYPE OF RESULT IN ASSIGN");
                console.log("CONTROLLER: sending data!");
                console.log("Data: ", results);
                let data = JSON.parse(results.toString());
                console.log("TYPE OF DATA: ", typeof data);
                res.status(200).send({ data });
            }
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
        //localstorage.setItem("Key= Name of the list", value= the list stringified)
        //the key is req.body.key // value is req.body.value --- dont need key if using FS
        console.log("Posting!!");
        console.log("Req: ", req.body);
        let key = req.body.key;
        let value = JSON.stringify(req.body.value);
        // fs.writeFile(dataFile, value,(err) => {
        //   if (err) throw err;
        //   console.log('The file has been saved!');
        // })
        // res.status(200).send({
        //   message: 'POST request successfulll!!!!'
        // })
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