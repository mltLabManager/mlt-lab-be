import { Request, Response } from "express";
import { Controller } from "./Controller";
import { OK, BAD_REQUEST } from "http-status-codes";
import { ParametersLogic } from "../logic/ParametersLogic";

export class ParametersController extends Controller {
  private ParametersLogic: ParametersLogic = new ParametersLogic();

  constructor() {
    super();
  }

  public async getAll(req: Request, res: Response) {
    this.ParametersLogic.getAll()
      .then((data) => {
        res.status(OK);
        res.json(data);
      })
      .catch((error) => {
        res.status(BAD_REQUEST).send(error);
      });
  }

  public async getParamById(req: Request, res: Response) {
    const id: String = req.params.id.toString();
    this.ParametersLogic.getParamById(id)
      .then((data) => {
        res.status(OK);
        res.json(data);
      })
      .catch((error) => {
        res.status(BAD_REQUEST).send(error);
      });
  }
}
