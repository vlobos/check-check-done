"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const path = __importStar(require("path"));
//server class
class Server {
    constructor() {
        //create expressjs application
        this.app = express_1.default();
        //configure application
        this.config();
    }
    config() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(express_1.default.static(path.resolve(__dirname, "../public")));
        this.app.listen(8080, () => {
            console.log("Listening on Port 8080.");
        });
    }
}
exports.default = new Server().app;
//# sourceMappingURL=index.js.map