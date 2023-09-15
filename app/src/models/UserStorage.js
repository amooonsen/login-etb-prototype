"use strict";

const fs = require("fs").promises

class UserStorage {

  static #getUserInfo(data, id) {
    const users = JSON.parse(data)

    const idx = users.id.indexOf(id)
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx]
      return newUser
    }, {})
    return userInfo
  }

  static getUsers(...fields) {
    // const users = this.#users
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers
    }, {})
    return newUsers
  }

  static getUserInfo(id) {
    return fs.readFile("./src/database/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id)
      })
      .catch((err => console.log(err)))
  }

  static save(userInfo) {
    // const users = this.#users
    users.id.push(userInfo.id)
    users.password.push(userInfo.password)
    users.names.push(userInfo.name)
  }
}

module.exports = UserStorage