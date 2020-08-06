import { Repository, getRepository } from "typeorm";
import ComputerHistory from "../models/ComputerHistory";

export class ComputerHistoryAccess {
  private ComputerHistoryRepo: Repository<ComputerHistory> = getRepository(
    ComputerHistory
  );

  constructor() {}

  public async getAll() {
    return this.ComputerHistoryRepo.find()
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }

  // public async getComputerHistoryById(computerId: Number) {
  //   return this.ComputerHistoryRepo.find({
  //     where: { computerId: computerId },
  //   })
  //     .then((data) => data)
  //     .catch((err) => {
  //       throw err;
  //     });
  // }

  public async insertComputerHistory(computerHistory: ComputerHistory) {
    // let currentComputer = await this.ComputerHistoryRepo.findOne({
    //   id: computerHistory.id,
    // });
    // computerHistory.changedBy = computerHistory.changedBy;
    // computerHistory.lastChangedAt = computerHistory.lastChangedAt;
    //   currentComputer.from = computerHistory.from;
    //   currentComputer.to = computerHistory.to;
    //   currentComputer.computerDataId = computerHistory.computerDataId;

    return this.ComputerHistoryRepo.save(computerHistory)
      .then((data) => data)
      .catch((err) => {
        throw err;
      });
  }

  //   public async getByUserId(id: String) {
  //     return this.StorageLocationRepo.createQueryBuilder("storageLocation")
  //       .innerJoin(
  //         "storageLocation.quartermasters",
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

  //   public async updateLastQuartermasterId(
  //     quartermasterId: String,
  //     countDocId: Number
  //   ) {
  //     // For the beforeUpdate we need to use save method
  //     let currentCountDoc = await this.CountDocRepo.findOne({ id: countDocId });

  //     if (currentCountDoc) {
  //       currentCountDoc.lastQuartermasterUpdateId = quartermasterId;
  //       return this.CountDocRepo.save(currentCountDoc)
  //         .then((data) => data)
  //         .catch((err) => {
  //           throw err;
  //         });
  //     }

  //     throw new Error();
  //   }

  //   public async getByStorageLoc(storageLocation: String) {
  //     return this.CountDocRepo.find({
  //       where: { isOpen: true, storageLocation: storageLocation },
  //     })
  //       .then((data) => data)
  //       .catch((err) => {
  //         throw err;
  //       });
  //   }

  //   public async getLastUpdatedById(quarterId: String) {
  //     return this.CountDocRepo.findOne({
  //       order: {
  //         lastUpdate: "DESC",
  //       },
  //       where: { isOpen: true, lastQuartermasterUpdateId: quarterId },
  //     })
  //       .then((data) => data)
  //       .catch((err) => {
  //         throw err;
  //       });
  //   }
}
