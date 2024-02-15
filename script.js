const result = document.getElementById("result");
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", () => {
  if (textInput.value !== "") {
    let palindrome = textInput.value
      .replace(/[^a-zA-Z0-9]/g, "")
      .split("")
      .reverse()
      .join("")
      .toLowerCase();
    let text = textInput.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    text === palindrome
      ? (result.innerText = `${textInput.value} is a palindrome`)
      : (result.innerHTML = `${textInput.value} is not a palindrome`);
  } else {
    alert("Please input a value");
  }
});
