import { Request, Response } from "express";
import { Model } from "mongoose";
import { ErrorController } from "../contoller/ErrorController";
import obj_messages from "../messages";

export async function DeleteService(req: Request, res: Response, model: any) {
  try {
    await model.deleteOne({ id: req.params.id });
    res.json(obj_messages.delete);
  } catch (error) {
    ErrorController(res, error);
  }
}
