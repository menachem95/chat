import mongoose from "mongoose";
const { SchemaTypes } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },
    groups: {
      type: [{ type: SchemaTypes.ObjectId, ref: "Group" }],
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", UserSchema);
