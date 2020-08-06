import { ParametersDataAccess } from "../dal/dbAccess/ParametersDataAccess";

export class ParametersLogic {
  private ParametersDataAccess: ParametersDataAccess = new ParametersDataAccess();

  public async getAll() {
    return this.ParametersDataAccess.getAll();
  }

  public async getParamById(id: String) {
    return this.ParametersDataAccess.getParamById(id);
  }

  public async getParameterValuesById(key: String) {
    return this.ParametersDataAccess.getParamById(key);
  }
}
