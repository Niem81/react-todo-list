'use strict'

const express = require('express')
const api = express.Router()
const mongoose = require('mongoose')

// variable para ingresar los middleware usados
// isLoggedInMiddleware servira para validar que el usuario se encuentre con sesion iniciada
var middleWr = require('../middlewares/middleware')
const UserCntrl = require('../controllers/user')
const AdviceCntrl = require('../controllers/advice')
const passport = require('passport')

// conexion con el User Controller y rutas para usuario
api.get('/user', UserCntrl.getUsers)
api.get('/user/:userId', UserCntrl.getUser)
api.put('/user/:userId', middleWr.isLoggedInMiddleware, UserCntrl.updateUser)
api.delete('/user/:userId', middleWr.isLoggedInMiddleware, UserCntrl.deleteUser)

// rutas para ingrediente
api.get('/advice', AdviceCntrl.getAdvices)
api.get('/advice/:adviceId', AdviceCntrl.getAdvice)
api.post('/advice', AdviceCntrl.createAdvice)
api.put('/advice/:adviceId', AdviceCntrl.updateAdvice)
api.delete('/advice/:adviceId', AdviceCntrl.deleteAdvice)

// rutas para autenticacion y registro de usuario
api.get('/profile', middleWr.isLoggedInMiddleware, function(req, res){
    res.redirect('/');
})

api.post('/register', UserCntrl.createUser);

// this is a custom callback for handling authentication
api.post('/login', function(req, res, next) {
    // note that authenticate() is called from within the route handler, rather than being used as route middleware.
    // This gives the callback access to the req and res objects through closure.
    console.log('Inside function login - then passport authenticate');
    passport.authenticate('local-login', function(err, user, info) {
        console.log("passing the passport part.");
        if (err) { console.log("There is error"); return next(err); }
        if (!user) { console.log("There is no user"); return res.redirect('/login'); }

        req.logIn(user, function(err) {
            console.log("Entering logIn user inside passport");
            if (err) { return next(err); }
            return res.json(user);
        });
    })(req, res, next);
});

api.get('/logout', function(req, res){
    console.log("loggint out");
    console.log(req);
    // console.log(req.user); // al generarse la sesion en passport , esta no estaria en user sino en session
    console.log(req.session);
    // var name = req.user;
    // console.log("LOGGIN OUT " + req.user.username);

    // se comentara esta solucion por una alternativa
    // req.logout();
    // res.send('Logout Ok');
    req.session.destroy(function (err) {
        console.log(err);
        console.log("logging out ......");
        var getOut = {
            message: "The session is gone",
            status: "OK"
        }
        // res.redirect('/'); //Inside a callback… bulletproof!
        res.send(getOut);
    });
});

module.exports = api;
