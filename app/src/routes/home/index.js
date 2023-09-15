"use strict"

const express = require("express")
const router = express.Router()

const controller = require("./home.ctrl")

const { output, process } = controller

router.get("/", output.home)
router.get("/login", output.login)
router.get("/register", output.register)

router.post("/login", process.login)
router.post("/register", process.register)

module.exports = router