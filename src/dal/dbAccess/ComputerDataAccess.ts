import { Repository, getRepository } from "typeorm";
import ComputerData from "../models/ComputerData";

export class ComputerDataAccess {
  private computerDataRepo: Repository<ComputerData> = getRepository(ComputerData);

  constructor() {}

  public async getAll() {
    return this.computerDataRepo
      .find()
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }

  public async getAllComputerDataById() {
    //computerId: Number) {
    return this.computerDataRepo
      .find({
        relations: ["compuetrHistorys"],
        // order: { lineNumber: "ASC" },
        // where: [
        //   {
        //     computerId: { id: computerId },
        //   },
        //],
      })
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }

  public async getComputerData(computerData: ComputerData) {
    return await this.computerDataRepo.findOne({
      where: { id: computerData.id },
      relations: ["compuetrHistorys"],
    });
  }

  public async updateComputerData(computerData: ComputerData) {
    return this.computerDataRepo
      .save(computerData)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        throw err;
      });
  }
}
