import { Request, Response, Router, NextFunction } from "express";
import { ParametersController } from "../controllers/ParametersController";

export default class ParametersRoute {
  public static create(router: Router) {
    let parameters = new ParametersController();

    router.get("/", (req: Request, res: Response) => {
      parameters.getAll(req, res);
    });

    router.get("/:id", (req: Request, res: Response) => {
      parameters.getParamById(req, res);
    });
  }
}
