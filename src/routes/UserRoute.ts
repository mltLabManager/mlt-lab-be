import { Request, Response, Router, NextFunction } from "express";
import { UserController } from "../controllers/UserController";

export default class UserRoute {
  public static create(router: Router) {
    let userData = new UserController();

    router.post("/login", (req: Request, res: Response) => {
      userData.login(req, res);
    });
  }
}
