import { Request, Response } from "express";
import { Model } from "mongoose";
import { ErrorController } from "../contoller/ErrorController";
import obj_messages from "../messages";

export async function UpdateService(req: Request, res: Response, model: any) {
  try {
    await model.updateOne({ id: req.params.id }, req.body);
    res.json(obj_messages.update);
  } catch (error) {
    ErrorController(res, error);
  }
}
