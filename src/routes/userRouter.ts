import { Router } from "express";
import { UserGroupsController } from "../controllers/userGroupsController";
export class UserManagementRouter {
  public userRoute: Router;
  private userGroupsController = new UserGroupsController();
  constructor() {
    this.userRoute = Router();
    /**
     * @swagger
     *
     * /api/v1/user/getDetails:
     *   get:
     *     summary:  Get user group policies
     *     description: Get user group policies
     *     tags:
     *       - User Group - with floors
     *     parameters:
     *       - name: groupName
     *         description: Name of user group
     *         in: query
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Request Handled sucessfully
     *       500:
     *         description: Internal server error
     */
    this.userRoute
      .route("/getDetails")
      .get(this.userGroupsController.getDetails);
  }
}
