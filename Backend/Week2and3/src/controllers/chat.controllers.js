const Chat = require("../models/chat.model");

exports.getMyChats = async (req, res) => {
  if (!req.query.id) {
    return res.status(400).json({ message: "Id required" });
  }
  try {
    const chats = await Chat.find({ sender: req.query.id });
    chats.push(...await Chat.find({ receiver: req.query.id }));
    chats.sort((a, b) => a.writtenAt - b.writtenAt);
    res.status(200).json({ success: true, message: "Chats retrieved successfully", data: chats });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createChat = async (req, res) => {
  if (!req.body.message || !req.body.sender || !req.body.receiver) {
    return res
      .status(400)
      .json({ message: "Message, sender, and receiver required" });
  }
  try {
    const chat = new Chat({
      message: req.body.message,
      sender: req.body.sender,
      receiver: req.body.receiver,
    });
    await chat.save();
    res.status(201).json({ success: true, message:"Create message succeed",data: chat });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
