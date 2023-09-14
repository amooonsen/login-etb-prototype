"use strict"

const express = require("express")
const router = express.Router()

const controller = require("./home.ctrl")

const { output, process } = controller

router.get("/", output.home)
router.get("/login", output.login)

router.post("/login", process.login)

module.exports = router