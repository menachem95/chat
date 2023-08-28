import mongoose from "mongoose";
const { SchemaTypes } = mongoose;

const MessageSchema = new mongoose.Schema(
  {
    isGroup: {
      type: Boolean,
      require: true,
      default: false,
    },
    from: {
      type: String,
      // type: { type: SchemaTypes.ObjectId, ref: "User" },
      // required: true,
    },
    isRead: {
      type: Boolean,
      require: true,
      default: false,
    },

    to: {
      type: String,
      // {
      //   type: SchemaTypes.ObjectId,
      //   ref: "User",
      // },
      // {
      //   type: SchemaTypes.ObjectId,
      //   ref: "Group",
      // },

      // require: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: Object,
  },
  { timestamps: true }
);
export default mongoose.model("Message", MessageSchema);
