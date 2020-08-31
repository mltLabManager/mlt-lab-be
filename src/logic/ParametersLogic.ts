import { ParametersDataAccess } from "../dal/dbAccess/ParametersDataAccess";

export class ParametersLogic {
  private ParametersDataAccess: ParametersDataAccess = new ParametersDataAccess();

  public async getAll() {
    return (await this.ParametersDataAccess.getAll()).sort((a,b) => +a.id - +b.id);
  }

  public async getParamById(id: String) {
    return this.ParametersDataAccess.getParamById(id);
  }

  public async getParameterValuesById(key: String) {
    return this.ParametersDataAccess.getParamById(key);
  }
}
