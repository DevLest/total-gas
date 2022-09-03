var ensureAuth = function ensureAuthentication(req, res, next){
    if (req.isAuthenticated()){
        next();
    }
    else {
        req.flash("info", "You must me logged in to view message");
        res.redirect("/login");
    }
}

module.exports = {ensureAuthenticated:ensureAuth}