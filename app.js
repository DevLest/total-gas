const express = require("express");
const expressLayouts = require("express-layouts");
const path = require("path");
const homeRoutes = require("./routes/home");

const app = express();
app.set("port", process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRoutes.routes);

app.listen(app.get("port"), () => console.log("App is listening to URL http://localhost:4455"));