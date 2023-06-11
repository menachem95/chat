import mongoose from "mongoose";
const { SchemaTypes } = mongoose;

const GrupSchema = new mongoose.Schema(
  {
    groupDisplayName: {
      type: String,
      required: true,
    },
    users: {
      type: [{ type: SchemaTypes.ObjectId, ref: "User" }],
      required: true
    },
    name: {
      type: String,
      required: true,
      unique: true
    }

  },
  { timestamps: true }
);
export default mongoose.model("Group", GrupSchema);
