const express = require("express");
const categoriesRouter = express.Router();


categoriesRouter.get("/", (req, res) => {
  res.json({ categories  });
});

const categories = [
  {
    id: 1,
    title: "Automobile",
  },
  {
    id: 2,
    title: "Phones",
  },
  {
    id: 3,
    title: "Bags",
  },
  {
    id: 4,
    title: "Airpods",
  },
  {
    id: 5,
    title: "Iphones",
  },
];

module.exports = categoriesRouter;
