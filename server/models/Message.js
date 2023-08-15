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
      type: { type: SchemaTypes.ObjectId, ref: "User" },
      require: true,
    },

    to: {
      type: 
        {
          type: SchemaTypes.ObjectId,
          ref: "User",
        },
        // {
        //   type: SchemaTypes.ObjectId,
        //   ref: "Group",
        // },
      
      // require: true,
    },
    content: {
      type: String,
      require: true,
    },

   
  },
  { timestamps: true }
);
export default mongoose.model("Message", MessageSchema);
