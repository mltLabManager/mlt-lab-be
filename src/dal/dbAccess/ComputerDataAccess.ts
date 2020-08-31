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
    return this.computerDataRepo
      .find({
        relations: ["computerHistory"],
      })
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }

  public async getComputerData(computerData: ComputerData) {
    return await this.computerDataRepo.findOne({
      where: { id: computerData.id },
      relations: ["computerHistory"],
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

  public async updateComputersData(computersData: ComputerData[]) {
    return this.computerDataRepo
      .save(computersData)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        throw err;
      });
  } 
}
