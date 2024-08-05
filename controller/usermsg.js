const UserModel = require('../models/user');

const usermsg = async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      const newUser = new UserModel({ name, email, message });
  
      await newUser.save();
  
      res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (err) {
      console.error('Error adding user:', err);
      res.status(500).json({ error: 'An error occurred while adding user' });
    }
  };

module.exports = usermsg;