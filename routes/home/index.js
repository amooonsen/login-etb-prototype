"use strict"

const express = require("express")
const router = express.Router()

const controller = require("./home.ctrl")

const { home, login } = controller

router.get("/", home)
router.get("/login", login)

module.exports = router