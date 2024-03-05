const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateToken } = require("../config/authenticate");

router.get("/", authenticateToken, userController.get_users);

router.post("/", userController.post_user);

router.get("/:id", authenticateToken, userController.get_user);

router.put("/:id", (req, res) => {
  return res.json(`update ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  return res.json(`delete ${req.params.id}`);
});

module.exports = router;
