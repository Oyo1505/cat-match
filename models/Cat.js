const { model, Schema } = require("mongoose");

const catShema = new Schema(
  {
    upvote: Number,
    idCat: String,
  },
  { timestamps: true }
);

const catModel = model("cats", catShema);

export default catModel;
