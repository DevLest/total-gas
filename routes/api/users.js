var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.json(["test wow"]);
});

module.exports = router;