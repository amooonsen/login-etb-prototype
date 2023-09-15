"use strict";

function init() {
  const inputId = document.querySelector('#login');
  const inputPassword = document.querySelector('#password');
  const submitBtn = document.querySelector('.submit-btn');


  // promise then
  const handleLogin = e => {
    // e.preventDefault();

    const req = {
      id: inputId.value,
      password: inputPassword.value
    }

    fetch("/login", {
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
    // ex) index.js에서 router.post가 뭔가 문제 있을 때
    .catch((err) => console.error(err))
  };

  // async await
  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   const req = {
  //     id: inputId.value,
  //     password: inputPassword.value
  //   }

  //   try {
  //     const res = await fetch("/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(req)
  //     })

  //     const data = await res.json()
  //     console.log(data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  const bindEvents = () => {
    submitBtn.addEventListener('click', handleLogin);
  }

  bindEvents()
}

document.addEventListener("DOMContentLoaded", init);

