const router = require("express").Router();
const CatModel = require("../models/Cat");

router.get("/cats", async (req, res, next) => {
  try {
    const cats = await CatModel.find().sort({ upvote: "desc" });
    res.status(200).send(cats);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

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
router.put("/cat/upvote/:id", async (req, res, next) => {
  try {
    const cat = await CatModel.findOne({ idCat: req.body.id });
    const catUpdated = await CatModel.findByIdAndUpdate(
      {
        _id: cat._id,
      },
      { upvote: cat.upvote + 1 },
      { new: true }
    );
    res.status(200).send(catUpdated);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
