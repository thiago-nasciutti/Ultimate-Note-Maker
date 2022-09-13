//Require Express
const express = require("express");

//Require Routes
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");

//PORT: Heroku or 3001
const PORT = process.env.PORT||3001;

//Uses
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/api",apiroutes);
app.use("/",htmlroutes);

//Listener
app.listen(PORT,() => console.log(`listening on PORT ${PORT}`));