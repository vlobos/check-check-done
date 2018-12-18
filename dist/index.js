"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express = require("express");
// Create a new express application instance
const app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
//# sourceMappingURL=index.js.map