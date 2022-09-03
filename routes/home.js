const express = require("express");

const { indexView } = require("../controller/homeController");
const router = express.Router();

router.get("/", indexView);

module.exports = {
    routes: router
}