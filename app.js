const express = require("express");
// const expressLayouts = require("express-layouts");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

const homeRoutes = require("./routes/home");
const db = require("./lib/db");
var setUpPassport = require("./lib/setuppassword");

const app = express();
setUpPassport();

app.set("port", process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    secret:"secretNode",
    resave:false,
    saveUninitialized:false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRoutes.routes);

app.listen(app.get("port"), () => console.log("App is listening to URL http://localhost:4455"));