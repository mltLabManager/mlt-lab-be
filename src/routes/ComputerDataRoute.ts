import { Request, Response, Router } from "express";
import { ComputerDataController } from "../controllers/ComputerDataController";

export default class CountDocLineRoute {
  public static create(router: Router) {
    const computerDataLines = new ComputerDataController();

    // Get all the computers (and their historys) of one count doc
    router.get("/", (req: Request, res: Response) => {
      computerDataLines.getAllComputerData(req, res);
    });

    // Update the given computer data in the body
    router.put("/:userId", (req: Request, res: Response) => {
      computerDataLines.updateConputerDataLine(req, res);
    });
  }
}
