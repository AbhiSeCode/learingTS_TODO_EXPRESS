import { Router } from "express";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todo";
//const express = require('express')

const router = Router();
//const route = express.Router()

router.post("/", createTodo);
router.get("/", getTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
//module.exports = router;
