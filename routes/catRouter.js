const router = require("express").Router();
const CatModel = require("../models/Cat");

router.get("/cat/:id", async (req, res, next) => {
  try {
    const cat = await CatModel.find({ idCat: req.params.id });
    if (cat.length > 0) {
      res.status(200).send(cat);
    } else {
      res.status(200).send({ found: false });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/cat", async (req, res, next) => {
  try {
    const cat = await CatModel.create({
      url: req.body.url,
      idCat: req.body.id,
    });

    res.status(200).send(cat);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
