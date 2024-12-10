import { UserAuth } from '../models/userAuth.model.js';
import admin from '../db/firebaseAdmin.js'; // Import the admin instance

// Register User
export const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {

    // Check if the email already exists
    const existingUser = await admin.auth().getUserByEmail(email).catch(() => null);

    if (existingUser) {
        return res.status(400).json({ error: 'The email address is already in use.' });
    }


    // Create user in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: userName,
    });

    // Save user details in MongoDB
    const newUser = new UserAuth({
      userName,
      email,
      firebaseUid: userRecord.uid,
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', userId: userRecord.uid });

  } catch (error) {

    if (error.code === 'auth/email-already-exists') {
        return res.status(400).json({ error: 'The email address is already in use.' });
      }
      
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Firebase Authentication doesn't directly support login.
    // Implement a custom solution with Firebase ID tokens if required.
    // For now, assume front-end handles Firebase sign-in.

    res.status(200).json({ message: 'Login endpoint hit', email });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Failed to log in user' });
  }
};
