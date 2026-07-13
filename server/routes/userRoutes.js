const express = require("express");

const router = express.Router();

router.post("/signup", (req, res) => {

    console.log(req.body);

    res.json({
        success: true,
        message: "Signup Successful",
        user: req.body
    });

});

router.post("/login", (req, res) => {

    res.json({
        success: true,
        message: "Login Successful"
    });

});

module.exports = router;