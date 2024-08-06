// whenever click hamburger icon, sidebar will appear
const menuIcon = document.querySelector("#menuIcon");
const sidebar = document.querySelector("#sidebar");

menuIcon.addEventListener("click", function () {
  sidebar.style.display = "block";
});

// whenever click X icon, sidebar will disappear
const closeIcon = document.querySelector("#closeIcon");
closeIcon.addEventListener("click", function () {
  sidebar.style.display = "none";
});
