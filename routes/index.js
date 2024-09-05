const express = require('express');
const router = express.Router();
const port = 3000;


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});


router.get('/contact', (req, res) => {
    res.render('contact');
});

// Route for the project page about TikTok Shop
router.get('/project', (req, res) => {
    res.render('project'); // Render the 'project.ejs' view
});

module.exports = router;



router.get('/services', (req, res) => {
    res.render('services');
});

module.exports = router;