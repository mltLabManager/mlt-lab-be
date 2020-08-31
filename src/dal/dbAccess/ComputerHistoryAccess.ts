import { Repository, getRepository } from "typeorm";
import ComputerHistory from "../models/ComputerHistory";

export class ComputerHistoryAccess {
  private ComputerHistoryRepo: Repository<ComputerHistory> = getRepository(ComputerHistory);

  constructor() {}

  public async getAll() {
    return this.ComputerHistoryRepo.find()
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }

  public async insertComputerHistory(computerHistory: ComputerHistory) {
    return this.ComputerHistoryRepo.save(computerHistory)
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }
}
