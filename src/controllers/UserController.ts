import { Request, Response } from "express";
import { Controller } from "./Controller";
import { OK, UNAUTHORIZED, BAD_REQUEST } from "http-status-codes";
import axios from "axios";

export class UserController extends Controller {
  constructor() {
    super();
  }

  public async login(req: Request, res: Response) {
    try {
      // Get token
      const token: any = await axios.post(
        //"https://mlt-test.herokuapp.com/mlt/api/login",
        "https://salmaz.herokuapp.com/mlt/api/login",
        JSON.stringify({
          args: [req.body],
        }),
        {
          headers: {
            accept: "application/json, text/plain, /",
            "content-type": "application/json",
            "sec-fetch-mode": "cors",
          },
        }
      );

      const tokenJson = token.data.data.authToken;
      console.log("token:", tokenJson);

      if (tokenJson === undefined) {
        res.send().status(UNAUTHORIZED);
      } else {
        res.cookie("token", tokenJson, { httpOnly: true });
        res.json({ tokenJson }).status(OK);
      }
    } catch (e) {
      console.log(e);
      res.send().status(BAD_REQUEST);
    }
  }
}
