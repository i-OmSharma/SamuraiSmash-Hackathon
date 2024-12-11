import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../db/database.js';
import authRoutes from '../routes/userAuth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send(">>>")
})

app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
