import { Request, Response } from "express";
import { Controller } from "./Controller";
import { OK, BAD_REQUEST } from "http-status-codes";
import { SystemDataLogic } from "../logic/SystemDataLogic";

export class SystemDataController extends Controller {
  private systemDataLogic: SystemDataLogic = new SystemDataLogic();

  constructor() {
    super();
  }

  public async getAll(req: Request, res: Response) {
    this.systemDataLogic
      .getAll()
      .then((data) => {
        res.status(OK);
        res.json(data);
      })
      .catch((error) => {
        res.status(BAD_REQUEST).send(error);
      });
  }

  //   public async getParamById(req: Request, res: Response) {
  //     const id: String = req.params.id.toString();
  //     this.ParametersLogic.getParamById(id)
  //       .then((data) => {
  //         res.status(OK);
  //         res.json(data);
  //       })
  //       .catch((error) => {
  //         res.status(BAD_REQUEST).send(error);
  //       });
  //   }
}
