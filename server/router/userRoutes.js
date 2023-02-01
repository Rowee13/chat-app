const router = require("express").Router();
const {
  signup,
  login,
  verifyToken,
  getUser,
} = require("../controllers/userController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);

module.exports = router;
