"use strict"

function init() {
  const userId = document.querySelector('#userId');
  const userName = document.querySelector('#userName');
  const userPassword = document.querySelector('#userPassword');
  const confirmUserPassword = document.querySelector('#confirmUserPassword');
  const submitBtn = document.querySelector('.submit-btn');

  // promise then
  const handleRegister = e => {
    e.preventDefault();

    if(!userId.value) return alert('아이디를 입력해주세요.')
    if(userPassword.value !== confirmUserPassword.value) {
      return alert('비밀번호가 일치하지 않습니다.')
    }

    const req = {
      id: userId.value,
      name: userName.value,
      password: userPassword.value,
      // confirmPassword: confirmUserPassword.value
    }

    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req)
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) {
        location.href = "/"
      } else {
        alert(res.msg)
      }
    })
    .catch((err) => console.error(err))
  };

  const bindEvents = () => {
    submitBtn.addEventListener('click', handleRegister);
  }

  bindEvents()
}

document.addEventListener("DOMContentLoaded", init);

