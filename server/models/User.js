import mongoose from "mongoose";
const { SchemaTypes } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
    socketId: { type: String },
    online: {
      type: Boolean,
      default: false
    },
    groups: {
      type: [{ type: SchemaTypes.ObjectId, ref: "Group" }],
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", UserSchema);
