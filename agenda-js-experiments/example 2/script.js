function showPopup(quote, color) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.style.backgroundColor = color;
  popup.innerText = quote;

  document.getElementById("popup-container").appendChild(popup);

  setTimeout(() => popup.remove(), 5000);
}

document.querySelectorAll(".buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    const interval = parseInt(button.getAttribute("data-interval"), 10); // Parse interval as integer
    const color = { 5: "lightcoral", 10: "lightblue", 15: "lightgreen" }[
      interval
    ];

    fetch("http://localhost:3000/schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interval }),
    });
  });
});
