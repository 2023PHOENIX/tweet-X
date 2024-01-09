import mongoose from "mongoose";

// HACK: this like can be used on multiple models.
const likeSchema = new mongoose.Schema(
  {
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"],
    },
    likeable: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },

  { timestamps: true },
);

const Like = new mongoose.model("Like", likeSchema);

export default Like;
