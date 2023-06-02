import express from "express";

const router = express.Router();
import { del, delstu } from "./Student_controller.js";
router.get("/Students/Delete", del);

router.get("/Students/:id([0-9]{2})", delstu);
export default router;
 
