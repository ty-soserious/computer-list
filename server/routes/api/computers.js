const fs = require("fs");
const express = require("express");

const router = express.Router();

// Get Computers
router.get("/", async (req, res) => {
  try {
    const computers = await readComputerFile;
    res.status(200).json({ status: "success", computers });
  } catch (err) {
    console.log(err);
  }
});

// Get Computer
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id * 1;
    const computers = await readComputerFile;

    const computer = computers.find((value) => value.id === id);

    if (!computer) {
      res.status(404).json({
        status: "fail",
        message: "Computer not found. Invalid ID.",
      });
    }

    res.status(200).json({ status: "success", computer });
  } catch (err) {
    console.log(err);
  }
});

const readComputerFile = new Promise((resolve, reject) => {
  fs.readFile(
    `${__dirname}/../../data/computers.json`,
    "utf-8",
    (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    }
  );
});

module.exports = router;