import { Response } from "express";

export async function ErrorController(res: Response, error: any) {
  res.json(error);
}
