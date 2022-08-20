import { Request, Response } from "express";
import { Model } from "mongoose";
import { ErrorController } from "../contoller/ErrorController";

export async function GetService(req: Request, res: Response, model: any) {
  try {
    const data = await model.find({});
    res.json(data);
  } catch (error) {
    ErrorController(res, error);
    console.log(error);
  }
}
