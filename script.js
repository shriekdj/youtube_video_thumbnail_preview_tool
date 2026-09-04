const imageUpload = document.getElementById("imageUpload");
const titleInput = document.getElementById("titleInput");
const channelInput = document.getElementById("channelInput");
const themeToggleBtn = document.getElementById("themeToggle");

const dynamicThumbs = document.querySelectorAll(".dynamic-thumb");
const dynamicTitles = document.querySelectorAll(".dynamic-title");
const dynamicChannels = document.querySelectorAll(".dynamic-channel");
const dynamicAvatars = document.querySelectorAll(".dynamic-avatar");

const placeholderImg =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221280%22%20height%3D%22720%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201280%20720%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%221280%22%20height%3D%22720%22%20fill%3D%22%23444%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23bbb%22%20font-family%3D%22sans-serif%22%20font-size%3D%2256px%22%20font-weight%3D%22bold%22%3EUpload%20Thumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E";

function initialize() {
  dynamicThumbs.forEach((img) => (img.src = placeholderImg));
  updateText();
}

function updateText() {
  const newTitle = titleInput.value || "Video Title Goes Here";
  const newChannel = channelInput.value || "Channel Name";

  dynamicTitles.forEach((el) => (el.textContent = newTitle));
  dynamicChannels.forEach((el) => (el.textContent = newChannel));
  dynamicAvatars.forEach(
    (el) => (el.textContent = newChannel.charAt(0).toUpperCase()),
  );
}

imageUpload.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      dynamicThumbs.forEach((img) => (img.src = e.target.result));
    };
    reader.readAsDataURL(file);
  }
});

titleInput.addEventListener("input", updateText);
channelInput.addEventListener("input", updateText);

themeToggleBtn.addEventListener("click", () => {
  const body = document.body;
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    themeToggleBtn.textContent = "🌙 Switch to Dark Mode";
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggleBtn.textContent = "☀️ Switch to Light Mode";
  }
});

initialize();
