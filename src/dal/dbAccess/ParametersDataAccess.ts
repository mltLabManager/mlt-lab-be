import { Repository, getRepository } from "typeorm";
import Parameters from "../models/Parameters";

export class ParametersDataAccess {
  private ParametersRepo: Repository<Parameters> = getRepository(Parameters);
  constructor() {}

  public async getAll() {
    return this.ParametersRepo.find({ relations: ["systemData"] })
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }

  public async getParamById(id: String) {
    return this.ParametersRepo.findOne({ where: { id } })
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }
}
