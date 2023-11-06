const mongoose = require("mongoose");
const blogsschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  intro: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  topicpic: {
    type: String,
    required: true,
  },
  writernmae: {
    type: String,
    required: true,
  },
  writeremail: {
    type: String,
    required: true,
  },
  writerintro: {
    type: String,
    required: true,
  },
  writerpic: {
    type: String,
    required: true,
  },
  likes: {
    type: [String],
    default: [],
  },
  authorid: String,
  timestamp: Date,
  comments: [
    {
      commentauthor: String,
      commentpic: String,
      text: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const blogs1 = mongoose.model("blog", blogsschema);

module.exports = {
  blogs1,
};
