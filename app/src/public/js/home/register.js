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

    const req = {
      id: userId.value,
      name: userName.value,
      password: userPassword.value,
      confirmPassword: confirmUserPassword.value
    }

    console.log(req)

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
        location.href = "/login"
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

