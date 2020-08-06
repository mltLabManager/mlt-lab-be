import { Repository, getRepository } from "typeorm";
import SystemData from "../models/SystemData";

export class SystemDataAccess {
  private SystemDataRepo: Repository<SystemData> = getRepository(SystemData);

  constructor() {}

  public async getAll() {
    return this.SystemDataRepo.find()
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }

  //   public async getParametersById(id: String) {
  //     return this.SystemDataRepo.createQueryBuilder("systemData")
  //       .innerJoin(
  //         "systemData.quartermasters",
  //         "quartermasters",
  //         "quartermasters.quartermasterId = :id",
  //         { id }
  //       )
  //       .getMany()
  //       .then((data) => data)
  //       .catch((err) => {
  //         throw err;
  //       });
  //   }

  //   public async getParametersById(id: String) {
  //     return this.ParametersRepo.findOne({ where: { id } })
  //       .then((data) => data)
  //       .catch((err) => {
  //         throw err;
  //       });
  //   }
}
