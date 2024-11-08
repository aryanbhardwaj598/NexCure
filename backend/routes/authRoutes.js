const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const protect = require('../middlewares/authMiddleware');

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Get user profile (protected)
router.get('/profile', protect, getUserProfile);

module.exports = router;
