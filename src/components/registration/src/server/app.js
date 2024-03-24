import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userRoutes from './routes/userRoutes.js';
import User from './models/User.js';
import useRoutes from './routes/userRoutes.js';

const app = express ();

mongoose.connect('mongodb+srv://wesnawuckovic:08zmrwizfgB5lvfX@cluster0.cdbazys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection to MongoDB failed:', error));

app.use (express.json ());

app.use ('/api/register', userRoutes);

app.post ('/api/login', async (req, res) => {
  const {email, password} = req.body;

  try {
    console.log('Received login request for email:', email);
    const user = await User.findOne({ email }).select('password');

    if (!user) {
      console.log('User not found for email:', email);
      return res
        .status (404)
        .json ({success: false, message: 'User not found'});
    }

    const passwordMatch = await bcrypt.compare (password, user.password);

    if (!passwordMatch) {
      console.log('Incorrect password for email:', email);
      return res
        .status (401)
        .json ({success: false, message: 'Incorrect password'});
    }
    
    const token = jwt.sign ({userId: user._id}, 'your_secret_key', {
      expiresIn: '1h',
    });

    res.status (200).json ({success: true, token});
  } catch (error) {
    console.error ('An error occurred:', error);
    res
      .status (500)
      .json ({
        success: false,
        error: 'An error occurred. Please try again later.',
      });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
