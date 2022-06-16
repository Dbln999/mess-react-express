const Router = require("express");
const router = new Router();
const controller = require("./messageController");
const { check } = require("express-validator");

router.post("/new", controller.addMessage);
router.get('/get', controller.getMessages)
module.exports = router;
