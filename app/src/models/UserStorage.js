"use strict";

const fs = require("fs").promises

class UserStorage {

  static #baseUserUrl = "./src/database/users.json"

  static #getUserInfo(data, id) {
    const users = JSON.parse(data)

    const idx = users.id.indexOf(id)
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx]
      return newUser
    }, {})
    return userInfo
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data)

    if(isAll) return users

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers
    }, {})
    return newUsers
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile(this.#baseUserUrl)
      .then((data) => {
        return this.#getUsers(data, isAll, fields)
      })
      .catch((err => console.log(err)))
  }

  static getUserInfo(id) {
    return fs
      .readFile(this.#baseUserUrl)
      .then((data) => {
        return this.#getUserInfo(data, id)
      })
      .catch((err => console.log(err)))
  }

  static async save(userInfo) {
    const users = await this.getUsers(true)
    console.log(users)
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디 입니다."    }
    // 데이터 추가
    users.id.push(userInfo.id)
    users.password.push(userInfo.password)
    users.names.push(userInfo.names)
    fs.writeFile(this.#baseUserUrl, JSON.stringify(users))
    return { success: true }
  }
}

module.exports = UserStorage