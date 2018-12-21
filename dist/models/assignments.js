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
        console.log("MODEL: getAll fired");
        fs.readFile(dataFile, (err, data) => {
            if (err) {
                throw err;
            }
            else {
                console.log("MODEL: no error in getAll");
                callback(err, data);
            }
        });
    },
    postAssignment(assignment, callback) {
        console.log("MODEL: postAssignment fired");
        fs.writeFile(dataFile, JSON.stringify(assignment), (err) => {
            if (err) {
                throw err;
            }
            else {
                console.log("MODEL: no error in postAssignment");
                callback(err);
            }
        });
    }
};
//# sourceMappingURL=assignments.js.map