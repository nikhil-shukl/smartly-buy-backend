import Contact from '../models/Contact.js';

// @desc    Get all contact messages
// @route   GET /api/contact
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// @desc    Get a single contact message
// @route   GET /api/contact/:id
export const getMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Contact.findById(id);
    if (!message) return res.status(404).json({ message: 'Message not found' });
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// @desc    Create a contact message
// @route   POST /api/contact
export const createMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create message', error });
  }
};

// @desc    Delete a contact message
// @route   DELETE /api/contact/:id
export const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMessage = await Contact.findByIdAndDelete(id);
    if (!deletedMessage) return res.status(404).json({ message: 'Message not found' });
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete message', error });
  }
};
