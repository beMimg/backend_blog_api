const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateToken } = require("../config/authenticate");

router.get("/", authenticateToken, userController.get_users);

router.post("/", userController.post_user);

router.get("/self", authenticateToken, userController.get_user_self);

router.get("/:id", authenticateToken, userController.get_user);

router.put("/:id", authenticateToken, userController.put_user);

router.put(
  "/:id/update-color",
  authenticateToken,
  userController.put_user_color
);

router.delete("/:id", authenticateToken, userController.delete_user);

module.exports = router;
