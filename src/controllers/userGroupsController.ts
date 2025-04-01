const config = require("../../../config/config.js");
import { Constants } from "../common/constants";
const CONSTANTS = new Constants();
export class UserGroupsController {
  public getDetails = async (req: any, res: any) => {
    try {
      res.locals.logger.info("createUser - req.body,",
        { requestId: res.locals.requestId});
      return res.locals.responseMessage.responseSuccess(
        req,
        res,
        200,
        "Success",
        "User created successfully",
        res.locals.requestId
      );
    } catch (error) {
      res.locals.logger.error(
        "CreateUserGroup - internal error final catch block", {
        requestId: res.locals.requestId,
        error,
        errorcode: CONSTANTS.ERROR_USER_CREATION_FAILED
      });
      return res.locals.responseMessage.responseError(req,
        res,
        500,
        "failed",
        error,
        null,
        CONSTANTS.ERROR_USER_CREATION_FAILED,
        res.locals.requestId
      );
    }
  }
}
