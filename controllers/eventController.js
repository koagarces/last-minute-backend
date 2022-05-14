const { Event, User } = require("../models");

const getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    res.send(event);
  } catch (error) {
    throw error;
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.send(events);
  } catch (error) {
    throw error;
  }
};

const getAllEventsByUserId = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId);
    const events = await Event.findAll({ where: { userId: userId } });
    res.send(events);
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
    let id = parseInt(req.params.id);
    await Event.destroy({ where: { id: id } });
    res.send({ message: `Event with id ${id} has been deleted` });
  } catch (error) {
    throw error;
  }
};
const UpdateEvent = async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let updatedEvent = await Event.update(req.body, {
      where: { id: id },
      returning: true,
    });
    res.send(updatedEvent);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getEventById,
  getAllEvents,
  getAllEventsByUserId,
  createEvent,
  DeleteEvent,
  UpdateEvent,
};
