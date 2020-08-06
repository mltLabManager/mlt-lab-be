import { Request, Response } from "express";
import { Controller } from "./Controller";
import { OK, BAD_REQUEST } from "http-status-codes";
import { ComputerDataLogic } from "../logic/ComputerDataLogic";

export class ComputerDataController extends Controller {
  private computerDataLogic: ComputerDataLogic = new ComputerDataLogic();

  constructor() {
    super();
  }

  public async getAllComputerData(req: Request, res: Response) {
    this.computerDataLogic
      .getAllComputerDataById()
      .then((data) => {
        res.status(OK);
        res.json(data);
      })
      .catch((error) => {
        res.status(BAD_REQUEST).send("Not working " + error);
      });
  }

  public async updateConputerDataLine(req: Request, res: Response) {
    const computerDataLine = req.body;
    const userId: String = req.params.userId.toString();
    console.log("userId " + userId);

    this.computerDataLogic
      .updateComputerData(computerDataLine, userId)
      .then((data) => {
        res.status(OK);
        res.json(data);
      })
      .catch((error) => {
        console.log(error);
        res.status(BAD_REQUEST).send(error);
      });
  }
}
