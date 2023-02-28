const showButton = document.getElementById("showButton");
const hiddenDiv = document.getElementById("hiddenDiv");


showButton.addEventListener("click", () => {
    if (hiddenDiv.style.display === "none") {
        hiddenDiv.style.display = "block";
      } else {
        hiddenDiv.style.display = "none";
      }
});
