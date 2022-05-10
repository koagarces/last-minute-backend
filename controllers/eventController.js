const { Event, User } = require("../models");

const getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.eventId);
    res.send(event);
  } catch (error) {
    throw error;
  }
};

const createEvent = async (req, res) => {
  console.log(req.body);
  try {
    let userId = parseInt(req.params.userId);
    let eventBody = {
      userId,
      ...req.body,
    };
    const newEvent = await Event.create(eventBody);
    res.send(newEvent);
  } catch (error) {
    throw error;
  }
};

const DeleteEvent = async (req, res) => {
  try {
    let eventId = parseInt(req.params.eventId);
    await Event.destroy({ where: { id: eventId } });
    res.send({ message: `Event with id ${eventId} has been deleted` });
  } catch (error) {
    throw error;
  }
};
const UpdateEvent = async (req, res) => {
  try {
    let EventId = parseInt(req.params.eventId);
    let updatedEvent = await Event.update(req.body, {
      where: { id: EventId },
      returning: true,
    });
    res.send(updatedEvent);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getEventById,
  createEvent,
  DeleteEvent,
  UpdateEvent,
};
