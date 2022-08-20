import express from "express";
import {
  DeleteDatesController,
  GetDatesController,
  PostDatesController,
  PutDatesController,
} from "../contoller/DatesController";
const router = express.Router();

router.get("/", (req, res) => {
  GetDatesController(req, res);
});

router.post("/", (req, res) => {
  PostDatesController(req, res);
});
router.put("/:id", (req, res) => {
  PutDatesController(req, res);
});

router.delete("/:id", (req, res) => {
  DeleteDatesController(req, res);
});

export default router;
