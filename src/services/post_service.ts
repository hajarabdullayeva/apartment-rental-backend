import { Request, Response } from "express";
import { Model } from "mongoose";
import { ErrorController } from "../contoller/ErrorController";
import obj_messages from "../messages";

export async function PostService(req: Request, res: Response, model: any) {
  try {
    console.log(req.body);
    await model.create(req.body);
    res.json(obj_messages.success);
  } catch (error) {
    ErrorController(res, error);
  }
}
