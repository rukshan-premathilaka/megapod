const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/signup');
const { signing } = require('../controllers/signing');


router.post("/signup", signup);

router.post("/signing", signing);


router.get('/check-auth', (req, res) => {
    if (req.session.user) {
        res.json({ isLoggedIn: true, user: req.session.user });
    } else {
        res.json({ isLoggedIn: false });
    }
});



module.exports = router;
