const { Event, User, Match } = require("../models");

const getMatchesByeventId = async (req, res) => {
  try {
    let event_Id = parseInt(req.params.eventId);
    const match = await Match.findAll({
      where: {
        eventId: event_Id,
      },
    });
    res.send(match);
  } catch (error) {
    throw error;
  }
};
const getMatchesByUserId = async (req, res) => {
  try {
    let user_Id = parseInt(req.params.userId);
    const match = await Match.findAll({
      where: {
        userId: user_Id,
      },
    });
    res.send(match);
  } catch (error) {
    throw error;
  }
};

const createMatch = async (req, res) => {
  console.log(req.body);
  try {
    let userId = parseInt(req.params.userId);
    let eventId = parseInt(req.params.eventId);
    let matchBody = {
      userId,
      eventId,
      ...req.body,
    };
    const newMatch = await Match.create(matchBody);
    res.send(newMatch);
  } catch (error) {
    throw error;
  }
};

const DeleteMatch = async (req, res) => {
  try {
    let MatchId = parseInt(req.params.matchId);
    await Match.destroy({ where: { id: MatchId } });
    res.send({ message: `Event with id ${MatchId} has been deleted` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMatchesByeventId,
  getMatchesByUserId,
  createMatch,
  DeleteMatch,
};
