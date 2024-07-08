// ID：半角英数字記号のみ入力可能

let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  let loginId = document.getElementById("login_id");
  let loginValue = loginId.value;
  let password = document.getElementById("password");
  let passwordValue = password.value;

  let idCheckText = document.getElementById("idCheckText");
  let passwordCheckText = document.getElementById("passwordCheckText");

  // エラーメッセージをクリア
  idCheckText.textContent = "";
  passwordCheckText.textContent = "";

  let regex1 = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/;
  let isValid = true;

  if (!regex1.test(loginValue)) {
    idCheckText.textContent = "IDは半角英数字記号のみで記入して下さい";
    loginId.classList.add("errorFrame");
    isValid = false;
  } else {
    loginId.classList.remove("errorFrame");
  }
  if (!regex1.test(passwordValue)) {
    passwordCheckText.textContent =
      "パスワードは半角英数字記号のみで記入して下さい";
    password.classList.add("errorFrame");
    isValid = false;
  } else {
    password.classList.remove("errorFrame");
  }

  // 全ての入力が有効な場合にのみ処理を続行
  if (isValid) {
    window.location.href = "list.html";
  }
});
