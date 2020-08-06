import { Repository, getRepository } from "typeorm";
import Parameters from "../models/Parameters";

export class ParametersDataAccess {
  private ParametersRepo: Repository<Parameters> = getRepository(Parameters);

  constructor() {}

  public async getAll() {
    return this.ParametersRepo.find()
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

  public async getParameterValuesById(key: String) {
    return this.ParametersRepo.createQueryBuilder("parameters")
      .innerJoin(
        "parameters.systemData",
        "systemData",
        "systemData.key = :key",
        { key }
      )
      .getMany()
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }
}
