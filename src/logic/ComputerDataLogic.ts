import { ComputerDataAccess } from "../dal/dbAccess/ComputerDataAccess";
import { ComputerHistoryAccess } from "../dal/dbAccess/ComputerHistoryAccess";
import ComputerData from "../dal/models/ComputerData";
import ComputerHistory from "../dal/models/ComputerHistory";

export class ComputerDataLogic {
  private computerDataAccess: ComputerDataAccess = new ComputerDataAccess();
  private computerHistoryAccess: ComputerHistoryAccess = new ComputerHistoryAccess();

  public async getAll() {
    return this.computerDataAccess.getAll();
  }

  public async getAllComputerDataById() {
    //computerId: Number) {
    return this.computerDataAccess.getAllComputerDataById();
  }

  public async updateComputerData(computerData: ComputerData, userId: String) {
    const object = new ComputerData();

    let currentComputer = await this.computerDataAccess.getComputerData(computerData);

    if (currentComputer) {
      for (var k in currentComputer) object[k] = currentComputer[k];

      object.id = computerData.id;
      object.currentLocation = computerData.currentLocation;
      object.currentStatus = computerData.currentStatus;
      object.provider = computerData.provider;
      object.donatedBy = computerData.donatedBy;
      object.destination = computerData.destination;
      object.computerType = computerData.computerType;
      object.computerModel = computerData.computerModel;
      object.deliveryDate = computerData.deliveryDate;
      object.cpu = computerData.cpu;
      object.ram = computerData.ram;
      object.sdd = computerData.sdd;
      object.isImageInstalled = computerData.isImageInstalled;
      object.compuetrHistorys = currentComputer.compuetrHistorys;

      let objectHistory;

      if (currentComputer.currentStatus !== object.currentStatus) {
        objectHistory = new ComputerHistory();
        objectHistory.changedBy = userId;
        objectHistory.from = currentComputer.currentStatus;
        objectHistory.to = object.currentStatus;
        objectHistory.lastChangedAt = new Date();
        object.compuetrHistorys.push(objectHistory);
      }

      if (currentComputer.currentLocation !== object.currentLocation) {
        objectHistory = new ComputerHistory();
        objectHistory.changedBy = userId;
        objectHistory.from = currentComputer.currentLocation;
        objectHistory.to = object.currentLocation;
        objectHistory.lastChangedAt = new Date();
        object.compuetrHistorys.push(objectHistory);
      }

      return this.computerDataAccess.updateComputerData(object);
    }
  }
}
