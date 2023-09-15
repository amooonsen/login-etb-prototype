"use strict"

const User = require('../../models/User')

const output = {
  home: (req, res) => {
    res.render("home/index")
  },
  login: (req, res) => {
    res.render("home/login")
  },
  register: (req, res) => {
    res.render("home/register")
  }
}

const process = {
  login: (req, res) => {
    const { body } = req
    const user = new User(body)
    const response = user.login()

    return res.json(response)
  },
  register: (req, res) => {
    const { body } = req
    const user = new User(body)
    const response = user.register()

    return res.json(response)
  }
}

module.exports = {
  output,
  process
}