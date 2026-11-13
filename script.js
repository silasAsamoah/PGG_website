// Mobile navigation and demo form behaviour for Chapter Church.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// This is a front-end demo only. No prayer request is transmitted or saved.
document.querySelectorAll(".demo-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent =
        "Preview only: nothing has been sent or saved. Connect a secure form service before publishing this feature.";
    }
  });
});

function updateLocalMeetingTime() {
  const timeElement = document.getElementById("localMeetingTime");

  if (!timeElement) return;

  try {
    const visitorTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Use a known Sunday and convert the recurring GMT schedule.
    const referenceSunday = new Date("2026-01-04T00:00:00Z");

    const start = new Date(referenceSunday);
    start.setUTCHours(20, 30, 0, 0);

    const end = new Date(referenceSunday);
    end.setUTCHours(22, 30, 0, 0);

    const options = {
      timeZone: visitorTimeZone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    const localStart = new Intl.DateTimeFormat("en-US", options).format(start);
    const localEnd = new Intl.DateTimeFormat("en-US", options).format(end);

    timeElement.textContent = `Your local time: ${localStart} – ${localEnd} (${visitorTimeZone})`;
  } catch (error) {
    timeElement.textContent = "Every Sunday, 8:30 PM – 10:30 PM GMT";
  }
}

updateLocalMeetingTime();
