const inputBox = document.getElementById("input-box");
const conversation = document.querySelector(".conversation");

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    if (inputBox.value.trim() !== "") {
      const message = document.createElement("div");
      message.classList.add("message");
      message.innerHTML = inputBox.value.replace(/\n/g, "<br>");
      conversation.appendChild(message);
      inputBox.value = "";
      conversation.scrollTop = conversation.scrollHeight;
    }
  }
});
