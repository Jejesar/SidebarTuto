const sidebar = document.getElementById("sidebar");
const main = document.getElementsByTagName("main")[0];

sidebar.onmouseenter = () => {
  setTimeout(() => {
    sidebar.classList.add("active");
  }, 200);

  main.style.marginLeft = "225px";
};

sidebar.onmouseleave = () => {
  setTimeout(() => {
    sidebar.classList.remove("active");
  }, 200);

  main.style.marginLeft = "75px";
};
