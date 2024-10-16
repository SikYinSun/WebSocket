import express from 'express';

const router = express.Router();

// Message Endpoints
router.get('/messages', (req, res) => {
  // get all messages
  res.json("Getting All messages");
});

router.post('/messages', (req, res) => {
  const { sender, receiver, message } = req.body;
  if (!sender || !receiver || !message) {
      return res.status(400).json({ error: 'Sender, receiver and message are required' });
  }
  // store message into database
  const newMessage = "Creating new message"
  res.status(201).json(newMessage);
});

router.delete('/messages/:id', (req, res) => {
  const { id } = req.params;
  // delete message from database using id 
  const deletedMessage = `delete with id ${id}`;
  if (!deletedMessage) {
      return res.status(404).json({ error: 'Message not found' });
  }
  res.status(200).json(deletedMessage);
});

export default router;

