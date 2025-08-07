const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/authController');

// Test route to check if /api/auth is reachable
router.get('/', (req, res) => {
    res.send("Welcome to the auth routes");
});

// POST /api/auth/signup
router.post('/signup', signupUser);

// POST /api/auth/login
router.post('/login', loginUser);

module.exports = router;
