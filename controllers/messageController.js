const { Event, User, Match, Message } = require("../models");

const getMessages = async (req, res) => {
  try {
    let match_id = parseInt(req.params.matchId);
    const match = await Message.findAll({
      where: {
        matchId: match_id,
      },
    });
    res.send(match);
  } catch (error) {
    throw error;
  }
};

const createMessage = async (req, res) => {
  console.log(req.body);
  try {
    let userId = parseInt(req.params.userId);
    let matchId = parseInt(req.params.matchId);
    let messageBody = {
      userId,
      matchId,
      ...req.body,
    };
    const newMessage = await Message.create(messageBody);
    res.send(newMessage);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMessages,
  createMessage,
};
