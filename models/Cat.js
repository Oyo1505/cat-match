const { model, Schema } = require("mongoose");

const catShema = new Schema(
  {
    url: String,
    upvote: { type: Number, default: 0 },
    idCat: String,
  },
  { timestamps: true }
);

const catModel = model("cats", catShema);

module.exports = catModel;
