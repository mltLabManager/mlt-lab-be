import { Request, Response, Router, NextFunction } from "express";
import { ComputerHistoryController } from "../controllers/ComputerHistoryController";

export default class IdentifierLineRoute {
  public static create(router: Router) {
    let computerHistory = new ComputerHistoryController();

    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.writeHead(200);
      res.end("API objectManager works");
    });

    router.get("/all", (req: Request, res: Response) => {
      computerHistory.getAll(req, res);
    });

    // router.post("/", (req: Request, res: Response) => {
    //   computerHistory.insertConputerDataLine(req, res);
    // });

    // router.delete("/", (req: Request, res: Response) => {
    //   computerHistory.delete(req, res);
    // });
  }
}
