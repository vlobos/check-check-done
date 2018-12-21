"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const dataFile = path.join(__dirname, "../../data/db.json");
exports.AssignModel = {
    getAll(callback) {
        //get all
        console.log("MODEL: getAll fired");
        //request will be the name of the object saved into localstorage...the key...
        fs.readFile(dataFile, (err, data) => {
            if (err) {
                throw err;
            }
            else {
                console.log("MODEL: no error");
                callback(err, data);
            }
        });
    }
    //   public getOne(req: Request, res: Response): void {
    //     //get one assignment to prepare task posting
    //     console.log("Getting one!!")     
    //   }
    //   public postAssignment(req: Request, res: Response): void {
    // //post
    // //localstorage.setItem("Key= Name of the list", value= the list stringified)
    // //the key is req.body.key // value is req.body.value --- dont need key if using FS
    //   console.log("Posting!!");
    //   console.log("Req: ", req.body);
    //   let key = req.body.key;
    //   let value = JSON.stringify(req.body.value);
    //   fs.writeFile(dataFile, value,(err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    //   })
    //   res.status(200).send({
    //     message: 'POST request successfulll!!!!'
    //   })
    //   }
};
//# sourceMappingURL=assignments.js.map