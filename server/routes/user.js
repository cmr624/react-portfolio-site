const express = require('express');
const router = express.Router();
const User = require('../database/models/user').User;
const passport = require('../passport');
const Favorite = require('../database/models/user').Favorite;

router.post('/', (req, res) => {
    console.log('user signup');
    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) 
                {
                    console.log("failed at userSave");
                    return res.json(err)
                }
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

//the post request for saving new favorites
router.post("/favorites", (req, res) => {
    const newUser = new Favorite({
        name: req.body.data.name
    });
    if (req.user)
    {
        req.user.favorites.push(newUser);
        req.user.save();
    }
});

//get all of the current user's favorites
router.get("/favorites", (req, res) => {
    if (req.user)
    {
        res.send({favorites: req.user.favorites});
    } else
    {
        res.send({favorites: []});
    }
});

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router;