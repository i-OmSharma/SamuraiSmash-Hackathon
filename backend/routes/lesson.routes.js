import express from 'express';
import { Lesson } from '../models/lesson.model.js';

const router = express.Router();

/**
 * Mark a lesson as completed
 */
router.post('/complete', async (req, res) => {
  const { title } = req.body;

  if (!title) return res.status(400).send({ message: 'Title is required' });

  try {
    const lesson = await Lesson.findOneAndUpdate(
      { title },
      { completedAt: new Date() },
      { upsert: true, new: true }
    );
    res.status(200).send({ message: 'Lesson marked as completed', lesson });
  } catch (error) {
    res.status(500).send({ message: 'Error updating progress', error });
  }
});

/**
 * Get all lessons with their progress
 */
router.get('/', async (req, res) => {
  try {
    const lessons = await Lesson.find({});
    res.status(200).send(lessons);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching lessons', error });
  }
});

/**
 * Reset lesson completion (for testing or redoing lessons)
 */
router.post('/reset', async (req, res) => {
  const { title } = req.body;

  if (!title) return res.status(400).send({ message: 'Title is required' });

  try {
    const lesson = await Lesson.findOneAndUpdate(
      { title },
      { completedAt: null },
      { new: true }
    );
    res.status(200).send({ message: 'Lesson reset successfully', lesson });
  } catch (error) {
    res.status(500).send({ message: 'Error resetting progress', error });
  }
});

export default router;
