import express, { Request, Response, NextFunction } from "express";
import * as service from "../service/content.service";
import * as repository from "../repository/content.repository";

const router = express.Router();
const repo = repository.ContentRepository;

router.post(
  "/content",
  async (req: Request, res: Response, next: NextFunction) => {
    const response = await service.CreateContent(req.body, repo);
    return res.status(200).json(response);
  }
);

router.get(
  "/content",
  async (req: Request, res: Response, next: NextFunction) => {
    const response = await service.GetContent(req.body, repo);
    return res.status(200).json(response);
  }
);

router.patch(
  "/content",
  async (req: Request, res: Response, next: NextFunction) => {
    const response = await service.UpdateContent(req.body, repo);
    return res.status(200).json(response);
  }
);

router.delete(
  "/content",
  async (req: Request, res: Response, next: NextFunction) => {
    const response = await service.DeleteContent(req.body, repo);
    return res.status(200).json(response);
  }
);

export default router;
