import {
  activateUser,
  loadUser,
  loginUser,
  logoutUser,
  registerUser,
  updateUserAvatar,
  updateUserInfo,
} from "../controllers/user.controller";
import express from "express";
import { upload } from "../middlewares/multer.middlewares";
import { isAuthenticated } from "../middlewares/auth.middlewares";

const router = express.Router();

router.route("/register").post(upload.single("file"), registerUser);
router.route("/activateuser/:activation_token").post(activateUser);
router.route("/login").post(loginUser);
router.route("/getuser").get(isAuthenticated, loadUser);
router.route("/logout").get(isAuthenticated, logoutUser);
router.route("/update-user-info").put(isAuthenticated, updateUserInfo);
router
  .route("/update-avatar")
  .put(isAuthenticated, upload.single("file"), updateUserAvatar);

export default router;
