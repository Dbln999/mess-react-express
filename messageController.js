const Message = require("./Schema/Message");
const { validationResult } = require("express-validator");

class messageController {
  async addMessage(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({ message: "Server errors" + errors });
      }

      const { title, user, date} = req.body;

      const newMessage = new Message({
        title: title,
        user: user,
        date: date
      });

      await newMessage.save();
      return res
        .status(201)
        .json({ message: "Message was added successfully" });
    } catch (e) {
      res.status(400).json({ message: "Server error in addition" });
    }
  }
  async getMessages(req, res) {
    try {
      const messages = await Message.find();
      res.json(messages);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new messageController();
