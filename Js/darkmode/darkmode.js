const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function toggleDarkLightMode(isDark) {
  //   sectionBack.style.backgroundColor = isDark
  //     ? "rgb(66 66 66 / 50%)"
  //     : "rgb(255 255 255 / 50%)";
  //   textBox.style.backgroundColor = isDark
  //     ? "rgb(255 255 255 / 50%)"
  //     : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  //   isDark ? imageMode("dark") : imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(LIGHT_THEME);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

//Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}
