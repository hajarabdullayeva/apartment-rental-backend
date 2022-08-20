import { Request, Response } from "express";
import Dates from "../models/Dates";
import { DeleteService } from "../services/delete_service";
import { GetService } from "../services/get_service";
import { PostService } from "../services/post_service";
import { UpdateService } from "../services/update_service";

export async function GetDatesController(req: Request, res: Response) {
  GetService(req, res, Dates);
}

export async function PostDatesController(req: Request, res: Response) {
  PostService(req, res, Dates);
}

export async function PutDatesController(req: Request, res: Response) {
  UpdateService(req, res, Dates);
}

export async function DeleteDatesController(req: Request, res: Response) {
  DeleteService(req, res, Dates);
}
