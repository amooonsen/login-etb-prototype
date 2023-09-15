"use strict";

class UserStorage {
  static #users = {
    id: ['etribe01', 'etribe02', 'etribe03'],
    password: ['1234', '1234', '1234'],
    names: ['철수', '영희', '시발']
  }

  static getUsers(...fields) {
    const users = this.#users
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers
    }, {})
    return newUsers
  }

  static getUserInfo(id) {
    const users = this.#users
    const idx = users.id.indexOf(id)
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx]
      return newUser
    }, {})
    return userInfo
  }
}

module.exports = UserStorage