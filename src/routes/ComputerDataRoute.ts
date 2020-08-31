import { Request, Response, Router } from "express";
import { ComputerDataController } from "../controllers/ComputerDataController";
import axios from "axios";
import { OK } from "http-status-codes";

export default class CountDocLineRoute {
  public static create(router: Router) {
    const computerDataLines = new ComputerDataController();

    // Get all the computers (and their historys) of one count doc
    router.get("/", (req: Request, res: Response) => {
      computerDataLines.getAllComputerData(req, res);
    });

    router.get("/delivery", (req: Request, res: Response) => {
      computerDataLines.getShipmentData(req, res);
    });

    // Update the given computer data in the body
    router.put("/:userId", (req: Request, res: Response) => {
      computerDataLines.updateConputerDataLine(req, res);
    });

    // Update the given computer data in the body
    router.post("/reception", (req: Request, res: Response) => {
      computerDataLines.reportDeliveryReception(req, res);
    });

    // Add the given computer data in the body
    router.post("/createReception", (req: Request, res: Response) => {
      computerDataLines.createDeliveryReception(req, res);
    });
  }
}
