import { SystemDataAccess } from "../dal/dbAccess/SystemDataAccess";

export class SystemDataLogic {
  private systemDataAccess: SystemDataAccess = new SystemDataAccess();

  public async getAll() {
    return this.systemDataAccess.getAll();
  }

  //   public async getParamById(id: String) {
  //     return this.ParametersDataAccess.getParamById(id);
  //   }

  //   public async getParameterValuesById(key: String) {
  //     return this.ParametersDataAccess.getParamById(key);
  //   }
}
