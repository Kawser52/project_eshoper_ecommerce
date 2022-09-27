const express = require('express');
const userRoutes = express.Router()

const {kitKit} = require("../controller/userController")

userRoutes.get('/', kitKit)

module.exports = userRoutes;