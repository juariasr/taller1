const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.route("/").get(controller.all).post(controller.post).put(controller.put);

router.route("/:id").get(controller.get).delete(controller.delete);

module.exports = router;
