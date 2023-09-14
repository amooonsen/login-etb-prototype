"use strict"

const users = {
  id: ['etribe01', 'etribe02', 'etribe03'],
  password: ['1234', '1234', '1234']
}


const output = {
  home: (req, res) => {
    res.render("home/index")
  },
  login: (req, res) => {
    res.render("home/login")
  }
}

const process = {
  login: (req, res) => {
    const { id, password } = req.body

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id)
      if (users.password[idx] === password) {
        return res.json({
          success: true
        })
      }
    }

    return res.json({
      success: false,
      msg: '로그인 실패'
    })
  }
}

module.exports = {
  output,
  process
}