import { Repository, getRepository } from "typeorm";
import SystemData from "../models/SystemData";

export class SystemDataAccess {
  private SystemDataRepo: Repository<SystemData> = getRepository(SystemData);

  constructor() {}

  public async getAll() {
    return this.SystemDataRepo.find({ relations: ['key']  })
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }
}
