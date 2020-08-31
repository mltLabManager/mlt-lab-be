import { Request, Response } from "express";
import { Controller } from "./Controller";
import { OK, BAD_REQUEST } from "http-status-codes";
import { ComputerDataLogic } from "../logic/ComputerDataLogic";
import { ComputerDataAccess } from "../dal/dbAccess/ComputerDataAccess";
import ComputerData from "../dal/models/ComputerData";
import axios from "axios";

interface DeliveryRowType {
  deliveryId: string;
  computerId: string;
  type: number;
  donator: string;
  isMissing: boolean;
  provider: number;
  currentLocation: number;
  currentStatus: number;
}

interface DeliveryJson {
  id?: string;
  deliverStatus: number;
  archive: boolean;
  basketType?: string; 
  comment?: string; 
  family?: string;
  courier?: string; 
  quantity?: number;
  selfPickup? :boolean;
}

interface DeliveryData {
  deliveryId: string;
  quantityOK: number;
  quantityMissing: number;
}

export class ComputerDataController extends Controller {
  private computerDataLogic: ComputerDataLogic = new ComputerDataLogic();

  constructor() {
    super();
  }

  public async getAllComputerData(req: Request, res: Response) {
    this.computerDataLogic
      .getAllComputerDataById()
      .then((data) => {
        res.status(OK);
        res.json(data);
      })
      .catch((error) => {
        res.status(BAD_REQUEST).send("Not working " + error);
      });
  }

  public async updateConputerDataLine(req: Request, res: Response) {
    const computerDataLine = req.body;
    const userId: String = req.params.userId.toString();
    console.log("userId " + userId);

    this.computerDataLogic
      .updateComputerData(computerDataLine, userId)
      .then((data) => {
        res.status(OK);
        res.json(data);
      })
      .catch((error) => {
        console.log(error);
        res.status(BAD_REQUEST).send(error);
      });
  }

  public async getCourier(courierPhoneNumber: string, req: Request) {
    try {
      const getURL = "https://mlt-test.herokuapp.com/mlt/api/Helpers?phone=" + courierPhoneNumber + "&_limit=1";
      const cookie = req.headers.cookie?.toString().replace("token", "authorization");
      const courierData: any = await axios.get(getURL, {
        headers: {
          accept: "application/json, text/plain, /",
          "accept-language": "en-US,en;q=0.9",
          "if-none-match": 'W/"32b-iOfvWRAL1Bwo7Yc4YkYoFDLMTK0"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          cookie: cookie,
        },
      });
      return (courierData.data.length > 0)? courierData.data[0].id : '';
    } catch (e) {
      console.log(e);
      return "";
    }
  }

  public async getShipmentData(req: Request, res: Response) {
    try {
      const courier: string = await this.getCourier(req.query.phone.toString(), req);
      if (!courier) res.status(BAD_REQUEST).send();

      const getShipmentDataURL =
        "https://mlt-test.herokuapp.com/mlt/api/FamilyDeliveries?courier=" +
        courier +
        "&archive=false&_sort=name&_order=asc";
      const cookie = req.headers.cookie?.toString().replace("token", "authorization");
      const shipmentData: any = await axios.get(getShipmentDataURL, {
        headers: {
          accept: "application/json, text/plain, /",
          "accept-language": "en-US,en;q=0.9",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          cookie: cookie,
        },
      });

      const deliveryJson = shipmentData.data;
      res.json({ deliveryJson }).status(OK);
    } catch (e) {
      console.log(e);
      res.status(BAD_REQUEST).send();
    }
  }

  public async reportDeliveryReception(req: Request, res: Response) {
    const deliveryRows: DeliveryRowType[] = req.body.deliveryRows;
    let computerDataLines: ComputerData[] = [];
    let deliverysData: DeliveryData[] = [];
    let newDeliverys: DeliveryRowType[] = [];
    let deliverysID: any = [];
    let index = 0;

    const courier: string = await this.getCourier(req.body.courierPhoneNumber, req);
    if (!courier) res.status(BAD_REQUEST).send();

    deliveryRows.forEach((deliveryRow) => {
      if (!deliveryRow.isMissing) {
        let object = new ComputerData();
        object.id = deliveryRow.computerId;
        object.deliveryId = deliveryRow.deliveryId;
        object.donatedBy = deliveryRow.donator;
        object.computerType = deliveryRow.type;
        object.currentLocation = deliveryRow.currentLocation;
        object.currentStatus = deliveryRow.currentStatus;
        object.provider = deliveryRow.provider;
        computerDataLines.push(object);
      }
    });

    deliveryRows.forEach((deliveryRow) => {
      if (deliveryRow.deliveryId != "") {
        let deliveryIndex = deliverysData
          .map(function (e) {
            return e.deliveryId;
          })
          .indexOf(deliveryRow.deliveryId);
        if (deliveryIndex === -1) {
          let newDelivery: DeliveryData = {
            deliveryId: deliveryRow.deliveryId,
            quantityOK: 0,
            quantityMissing: 0,
          };
          if (deliveryRow.isMissing === true) {
            newDelivery.quantityMissing += 1;
          } else {
            newDelivery.quantityOK += 1;
          }
          deliverysData.push(newDelivery);
        } else {
          if (deliveryRow.isMissing === true) {
            deliverysData[deliveryIndex].quantityMissing += 1;
          } else {
            deliverysData[deliveryIndex].quantityOK += 1;
          }
        }
      } else {
        let productWithNoDelivery: DeliveryRowType = deliveryRow;
        newDeliverys.push(productWithNoDelivery);
      }
    });
    this.computerDataLogic
      .updateComputersData(computerDataLines)
      .then(async (data) => {
        if(newDeliverys.length > 0) 
          this.newProductsDeliveryCreation(newDeliverys, courier, req, res);
        deliverysData.map((delivery) => {
          if (delivery.quantityMissing === 0) {
            let JsonData: DeliveryJson = {
              id: delivery.deliveryId,
              archive: true,
              deliverStatus: 11,
            };
            this.sendAPIupdate(JsonData, req);
          }
          if (delivery.quantityOK === 0) {
            let JsonData: DeliveryJson = {
              id: delivery.deliveryId,
              archive: false,
              deliverStatus: 25,
            };
            this.sendAPIupdate(JsonData, req);
          }
          if (delivery.quantityOK > 0 && delivery.quantityMissing > 0) {
            let JsonData: DeliveryJson = {
              id: delivery.deliveryId,
              archive: true,
              deliverStatus: 11,
              quantity: delivery.quantityOK,
            };
            this.sendAPIupdate(JsonData, req).then((familyData) => {
              let MissingJsonData: DeliveryJson = {
                archive: false,
                deliverStatus: 25,
                quantity: delivery.quantityMissing,
                family: familyData.family,
                basketType: familyData.basketType,
                courier: courier,
              };
              this.sendAPICreate(MissingJsonData, req);
            });
          }
        });

        res.json({ data }).status(OK);
      })
      .catch((error) => {
        console.log(error);
        res.status(BAD_REQUEST).send(error);
      });
  }

  public newProductsDeliveryCreation = 
    async (newProductsWithoutDelivery: DeliveryRowType[], courier: string, req: Request, res: Response) => {
    try {
      newProductsWithoutDelivery.forEach(newProductWithoutDelivery => {
        let basketType: string = "";
        switch (newProductWithoutDelivery.type) {
          case 1:
            basketType = "מסך"
            break;
          case 2:
            basketType = "מחשב נייד"
            break;
          case 3:
            basketType = "מחשב"
            break;
          default:
            break;
        }
        let JsonData: DeliveryJson = {
          archive: true,
          deliverStatus: 11,
          courier: courier,
          quantity: 1,
          basketType: basketType
        };
        this.sendAPICreate(JsonData, req);
      });
    } catch (e) {
      console.log(e);
      res.status(BAD_REQUEST).send();
    }
  };

  public sendAPIupdate = async (newDeliveryToBeSaved: DeliveryJson, req: Request) => {
    let deliveryJson;
    console.log("newDeliveryToBeSaved => ", newDeliveryToBeSaved);
    try {
      const reportDeliveryReceptionURL =
        "https://mlt-test.herokuapp.com/mlt/api/ActiveFamilyDeliveries/" + newDeliveryToBeSaved.id;
      const cookie = req.headers.cookie?.toString().replace("token", "authorization");
      const reportDeliveryReceptionData: any = await axios.put(
        reportDeliveryReceptionURL,
        JSON.stringify(newDeliveryToBeSaved),
        {
          headers: {
            accept: "application/json, text/plain, /",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            cookie: cookie,
          },
        }
      );
      deliveryJson = reportDeliveryReceptionData.data;
      console.log("After update deliveryJson of ", newDeliveryToBeSaved.id, " ==> ", deliveryJson);
      return deliveryJson;
    } catch (e) {
      console.log(e);
      return BAD_REQUEST;
    }
  };

  public sendAPICreate = async (newDeliveryToBeCreated: DeliveryJson, req: Request) => {
    let deliveryJson;
    try {
      const reportDeliveryReceptionURL = "https://mlt-test.herokuapp.com/mlt/api/addDelivery";
      const cookie = req.headers.cookie?.toString().replace("token", "authorization");
      const donorId = (newDeliveryToBeCreated.family)? newDeliveryToBeCreated.family : "483d4ccb-555c-4336-b375-98f821630eb4";
      console.log("Body of request sent to Hagai ==> ", newDeliveryToBeCreated)
      console.log("Donor Id ==> ", donorId)
      console.log("========================================")
      const reportDeliveryReceptionData: any = await axios.post(
        reportDeliveryReceptionURL,
        JSON.stringify({
          args: [donorId, newDeliveryToBeCreated],
        }),
        {
          headers: {
            accept: "application/json, text/plain, /",
            "accept-language": "en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7",
            "content-type": "application/json",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            cookie: cookie,
          },
        }
      );
      deliveryJson = reportDeliveryReceptionData.data;
      console.log("A new delivery was created => ", deliveryJson);
      return deliveryJson;
    } catch (e) {
      console.log(e);
      return BAD_REQUEST;
    }
  };

  public async createDeliveryReception(req: Request, res: Response) {
    const deliveryRows: DeliveryRowType[] = req.body.deliveryRows;
    let computerDataLines: ComputerData[] = [];
    let deliveryJson;
    let deliverysID: any = [];
    let index = 0;

    deliveryRows.forEach((deliveryRow) => {
      if (!deliveryRow.isMissing) {
        let object = new ComputerData();
        object.id = deliveryRow.computerId;
        object.deliveryId = deliveryRow.deliveryId;
        object.donatedBy = deliveryRow.donator;
        object.computerType = deliveryRow.type;
        object.currentLocation = deliveryRow.currentLocation;
        object.currentStatus = deliveryRow.currentStatus;
        object.provider = deliveryRow.provider;
        computerDataLines.push(object);
      }
    });
    deliveryRows.forEach((deliveryRow) => {
      if (deliverysID.indexOf(deliveryRow.deliveryId) === -1) {
        deliverysID.push(deliveryRow.deliveryId);
        if (deliveryRow.isMissing === true) {
          deliverysID.push(25);
        } else {
          deliverysID.push(11);
        }
      } else {
        if (deliveryRow.isMissing === true) {
          deliverysID[deliverysID.indexOf(deliveryRow.deliveryId) + 1] = 25;
        }
      }
    });
    this.computerDataLogic
      .updateComputersData(computerDataLines)
      .then((data) => {
        res.json({ data }).status(OK);
      })
      .catch((error) => {
        console.log(error);
        res.status(BAD_REQUEST).send(error);
      });
  }
}
