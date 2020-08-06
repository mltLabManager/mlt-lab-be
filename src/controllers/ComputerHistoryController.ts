import { Request, Response } from "express";
import { Controller } from "./Controller";
import { OK, BAD_REQUEST } from "http-status-codes";
import { ComputerHistoryLogic } from "../logic/ComputerHistoryLogic";
import ComputerData from "../dal/models/ComputerData";

// TODO: Add parameters validation checks for each one of the requests.
export class ComputerHistoryController extends Controller {
  private computerHistoryLogic: ComputerHistoryLogic = new ComputerHistoryLogic();

  constructor() {
    super();
  }

  /*
    The method returns all the computer historys.
  */
  public async getAll(req: Request, res: Response) {
    // Retrieve the data from the database.
    this.computerHistoryLogic
      .getAll()
      .then((data) => {
        res.status(OK);
        res.json(data);
      })
      .catch((error) => {
        res.status(BAD_REQUEST).send(error);
      });
  }

  // public async insertConputerDataLine(req: Request, res: Response) {
  //   const computerHistoryData = req.body;

  //   this.computerHistoryLogic
  //     .insertComputerHistoryData(computerHistoryData)
  //     .then((data) => {
  //       res.status(OK);
  //       res.json(data);
  //     })
  //     .catch((error) => {
  //       res.status(BAD_REQUEST).send(error);
  //     });
  // }

  //   public async add(req: Request, res: Response) {
  //     const serial_number: String = req.query.serialnumber.toString();
  //     const count_doc_line_id: Number = Number(req.query.countdocline);
  //     return this.computerHistoryLogic.add(serial_number, count_doc_line_id)
  //       .then((data) => {
  //         res.status(OK);
  //         res.json(data);
  //       })
  //       .catch((error) => {
  //         res.status(BAD_REQUEST).send(error);
  //       });
  //   }

  //   public async update(req: Request, res: Response) {
  //     const serial_number: String = req.query.serialnumber.toString();
  //     const count_doc_line_id: Number = Number(req.query.countdocline);
  //     const checked: Boolean = Boolean(req.query.checked);
  //     const identifier_line_id: Number = Number(req.query.identifierlineid);
  //     return this.computerHistoryLogic.update(
  //       serial_number,
  //       count_doc_line_id,
  //       checked,
  //       identifier_line_id
  //     )
  //       .then((data) => {
  //         res.status(OK);
  //         res.json(data);
  //       })
  //       .catch((error) => {
  //         res.status(BAD_REQUEST).send(error);
  //       });
  //   }

  //   public async delete(req: Request, res: Response) {
  //     const identifier_line_id: Number = Number(req.query.identifierlineid);
  //     this.IdentifierLineLogic.delete(identifier_line_id)
  //       .then((succeeded) => {
  //         res.status(OK);
  //         res.json(succeeded);
  //       })
  //       .catch((error) => {
  //         res.status(BAD_REQUEST).send(error);
  //       });
  //   }
}
