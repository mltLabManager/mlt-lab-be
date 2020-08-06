import { getConnection } from "typeorm";

class NotConnectedToDB extends Error {
  /**
   * Taken from Stackoverflow, how to create a custom error
   */
  constructor(msg = "") {
    super(msg);

    Object.setPrototypeOf(this, NotConnectedToDB.prototype);
  }
}

export class Controller {
  /**
   * Must be called only after connecting to db using typeorm
   * @throws NotConnectedToDB
   */
  constructor() {
    if (!getConnection().isConnected) {
      throw new NotConnectedToDB();
    }
  }
}
