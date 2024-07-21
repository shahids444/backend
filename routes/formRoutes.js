import express from 'express';
import FormData from '../models/formData.js';

const router = express.Router();

// Route to handle form submissions
router.post('/submit', async (req, res) => {
  const formData = new FormData(req.body);
  try {
    await formData.save();
    res.status(200).send({ message: 'Form data saved successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error saving form data', error });
  }
});
// Route to fetch all form data
router.get('/all', async (req, res) => {
    try {
      const formData = await FormData.find();
      res.status(200).send(formData);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching form data', error });
    }
  });
export default router;
