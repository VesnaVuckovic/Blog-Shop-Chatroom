import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({ firstName, lastName, email, password });
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const loginUser = async (req, res) =>  {
    try {
        const { email, password } = req.body;    
        
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }    
        
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ success: false, message: 'Incorrect password' });
        }    
        
        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
    
        res.status(200).json({ success: true, token });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
  
    let user = await User.findById(id);
    
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });    }

    
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    
    user = await user.save();
   
    res.status(200).json({ success: true, user });
  } catch (error) {   
    res.status(500).json({ success: false, error: error.message });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; 
    
    const deletedUser = await User.findByIdAndDelete(id);
    
    if (!deletedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
   
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {    
    res.status(500).json({ success: false, error: error.message });
  }
};