import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      requried: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
userSchema.pre("save", async function (next) {
  const user = this;

  const encryptedPassword = await bcrypt.hash(this.password, 10);
  user.password = encryptedPassword;
  next();
});

userSchema.methods.comparePassword = async function compare(password) {
  const response = await bcrypt.compare(password, this.password);
  return response;
};

userSchema.methods.genJWT = function generate() {
  return jwt.sign({ id: this._id, email: this.email }, "twitter_secret", {
    expiresIn: "1d",
  });
};
const User = mongoose.model("User", userSchema);

export default User;
