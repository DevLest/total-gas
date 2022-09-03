var express = require("express");
const passport = require("passport");

var ensureAuthenticated = require("../../middleware/auth").ensureAuthenticated;
var User = require("../../models/user");
var router = express.Router();

router.get("/", function(req, res){
    res.render("index");
});

router.get("/home", function(req,res){
    res.render("home/home");
});

router.get("/about", function(req,res){
    res.render("home/about");
});

router.get("/login", function(req,res){
    res.render("home/login");
});

router.post("/login", passport.authenticate("login", {
    successRedirect:"/",
    failureRedirect:"/login",
    failureFlash:true,
}));

router.get("/register", function(req,res){
    res.render("home/register");
});

router.post("/register", function(req, res, next){
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({emai:email}, function(err, user){
        if (err) { return next(err); }
        if (user) {
            req.flash("error", "There's an account already");
            return res.redirect("/register");
        }

        var newUser = new User({
            username:username,
            password:password,
            email:email,
        });

        newUser.save(next);
    });
}, passport.authenticate("login", {
    successRedirect:"/",
    failureRedirect:"/register",
    failureFlash:true,
}));

router.get("/logout", function(req, res, next){
    req.logout(function(err){
        if (err) { return next(err) }
        res.redirect("/home");
    });
});

module.exports = router;