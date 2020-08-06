import { ComputerHistoryAccess } from "../dal/dbAccess/ComputerHistoryAccess";
import ComputerHistory from "../dal/models/ComputerHistory";

export class ComputerHistoryLogic {
  private computerHistoryAccess: ComputerHistoryAccess = new ComputerHistoryAccess();

  public async getAll() {
    return this.computerHistoryAccess.getAll();
  }

  public async insertComputerHistoryData(computerHistory: ComputerHistory) {
    const object = new ComputerHistory();
    // object.id = computerHistory.id;
    object.changedBy = computerHistory.changedBy;
    object.lastChangedAt = computerHistory.lastChangedAt;
    object.from = computerHistory.from;
    object.to = computerHistory.to;
    object.computerDataId = computerHistory.computerDataId;

    return this.computerHistoryAccess.insertComputerHistory(object);
  }
}
