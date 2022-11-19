const router = require("express").Router();
const client = require("../dataBase/dbConnection");
const dotenv = require("dotenv").config();
//route to upload data to the database

router.post("/", async (req, res) => {
  console.log("thsi is the post value data", req.body);
  //   await client.connect(async (err) => {
  //     const collection = client.db("uploadingVideo").collection("videos");
  //     // perform actions on the collection object
  //     await collection
  //       .find({})
  //       .toArray()
  //       .then((data) => {
  //         // console.log("this si", data);
  //         res.json(data).status(200);
  //       })
  //       .catch((err) => {
  //         res.send(500);
  //       });
  //   });
  //   client.close();
});

module.exports = router;
