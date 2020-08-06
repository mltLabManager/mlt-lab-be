import { Request, Response, Router, NextFunction } from "express";
import { SystemDataController } from "../controllers/SystemDataController";

export default class ParametersRoute {
  public static create(router: Router) {
    let systemData = new SystemDataController();

    router.get("/", (req: Request, res: Response) => {
      systemData.getAll(req, res);
    });

    // router.get("/:id", (req: Request, res: Response) => {
    //     systemData.getById(req, res);
    // });
  }
}
