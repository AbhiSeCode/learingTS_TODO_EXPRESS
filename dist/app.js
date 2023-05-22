"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const express = require('express')
const todo_1 = __importDefault(require("./routes/todo"));
// const todoRoutes = require('./routes/todo')
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todo", todo_1.default);
/*this is an error handling middleware function which will automatically be called by express if any other
middleware pior to this one have error*/
//we get all these express types from @types/express.
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000, () => console.log("Server up and running"));
