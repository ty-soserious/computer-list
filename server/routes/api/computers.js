const fs = require("fs");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const computers = await readComputerFile;
  res.status(200).json({status: 'success', computers});
});

const readComputerFile = new Promise((resolve, reject) => {
  fs.readFile(`${__dirname}/../../data/computers.json`, "utf-8", (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(JSON.parse(data));
  });
});

module.exports = router;

// readComputerFile
//   .then((output) => {
//     console.log(output);
//   })
//   .catch((err) => {
//     console.log("Error reading computer list");
//   });
