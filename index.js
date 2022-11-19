const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
//Importing routes
const uploadRoute = require("./routes/uploadImage");
const retrieveInfo = require("./routes/retrievePost");
const validateInfo = require("./routes/validateInfo");
/*Routes section */
//1. This route will upload data to the database
app.use("/upload", uploadRoute);
//2. This route will retrieve post from the database
app.use("/retrieve", retrieveInfo);

app.use("/create-tokens", validateInfo);

//Serverside code to run on a paticular port
app.listen(PORT, (err) => {
  if (err) {
    console.log("Unable to start backend server ", err);
  } else {
    console.log("Success fully started server on port ", PORT);
  }
});
