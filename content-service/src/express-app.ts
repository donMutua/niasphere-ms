import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import contentRoutes from "./routes/content.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/health", (req: Request, res: Response, _: NextFunction) => {
  return res.status(200).json({ status: "UP" });
});

app.use(contentRoutes);

export default app;
