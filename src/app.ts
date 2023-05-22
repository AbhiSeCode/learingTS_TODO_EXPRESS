import express, { Response, NextFunction } from "express";
//const express = require('express')

import todoRoutes from "./routes/todo";
// const todoRoutes = require('./routes/todo')

const app = express();

app.use(express.json());
app.use("/todo", todoRoutes);

/*this is an error handling middleware function which will automatically be called by express if any other 
middleware pior to this one have error*/
//we get all these express types from @types/express.
app.use(
  (err: Error, req: express.Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(3000, () => console.log("Server up and running"));
