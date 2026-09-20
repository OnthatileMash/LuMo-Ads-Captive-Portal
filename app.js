
function go(page) {
  window.location.href = page;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-register-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const required = [...form.querySelectorAll("[required]")];
      const ok = required.every(el => el.type === "checkbox" ? el.checked : el.value.trim());
      if (!ok) {
        alert("Please complete the required fields.");
        return;
      }
      go("03-consent.html");
    });
  }

  const consent = document.querySelector("[data-consent-form]");
  if (consent) {
    consent.addEventListener("submit", (event) => {
      event.preventDefault();
      const required = [...consent.querySelectorAll("[required]")]
        .every(el => el.type === "checkbox" ? el.checked : true);
      if (!required) {
        alert("Please accept the required Wi-Fi service consent.");
        return;
      }
      go("04-ad.html");
    });
  }

  const countdown = document.querySelector("[data-countdown]");
  const adProgress = document.querySelector("[data-ad-progress]");
  if (countdown && adProgress) {
    let remaining = 25;
    const timer = setInterval(() => {
      remaining -= 1;
      countdown.textContent = `${remaining}s remaining`;
      adProgress.style.width = `${((25 - remaining) / 25) * 100}%`;
      if (remaining <= 0) {
        clearInterval(timer);
        go("05-connected.html");
      }
    }, 1000);
  }
});
