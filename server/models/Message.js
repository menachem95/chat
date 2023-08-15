import mongoose from "mongoose";
// const { ObjectId } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const MessageSchema = new mongoose.Schema(
  {
    isGroup: {
      type: Boolean,
      require: true,
      default: false,
    },
    from: {
      type: { type: ObjectId, ref: "User" },
      // require: true,
    },

    to: {
      type: 
        {
          type: ObjectId,
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
