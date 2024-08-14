const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

router.use("/users",userRouter)

// colocar las rutas aquí


module.exports = router;