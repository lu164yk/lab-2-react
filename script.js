// ============================================================
// 1. ЗБЕРІГАННЯ ДАНИХ У БРАУЗЕРІ (localStorage)
// ============================================================

function saveAndDisplayBrowserInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    cookiesEnabled: navigator.cookieEnabled,
    screenWidth: screen.width,
    screenHeight: screen.height,
    colorDepth: screen.colorDepth,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    onLine: navigator.onLine,
    savedAt: new Date().toLocaleString("uk-UA"),
  };

  // Save to localStorage
  localStorage.setItem("browserInfo", JSON.stringify(info));

  // Display in footer
  const container = document.getElementById("local-storage-data");
  if (!container) return;

  const labels = {
    userAgent: "User Agent",
    platform: "Платформа (OS)",
    language: "Мова браузера",
    cookiesEnabled: "Cookies увімкнено",
    screenWidth: "Ширина екрану (px)",
    screenHeight: "Висота екрану (px)",
    colorDepth: "Глибина кольору (bit)",
    timezone: "Часовий пояс",
    onLine: "Онлайн",
    savedAt: "Збережено о",
  };

  container.innerHTML = Object.entries(info)
    .map(
      ([key, val]) =>
        `<div class="info-row"><span class="info-key">${labels[key] || key}:</span><span class="info-val">${val}</span></div>`
    )
    .join("");
}

saveAndDisplayBrowserInfo();


// ============================================================
// 2. ВІДОБРАЖЕННЯ КОМЕНТАРІВ ІЗ СЕРВЕРА (JSONPlaceholder)
// ============================================================

const VARIANT = 20;

async function fetchAndDisplayComments() {
  const list = document.getElementById("comments-list");
  if (!list) return;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`
    );
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const comments = await response.json();

    list.innerHTML = comments
      .map(
        (c) => `
      <div class="comment-card">
        <div class="comment-header">
          <strong class="comment-name">${c.name}</strong>
          <span class="comment-email">${c.email}</span>
        </div>
        <p class="comment-body">${c.body}</p>
      </div>`
      )
      .join("");
  } catch (err) {
    list.innerHTML = `<p class="error-text">Не вдалося завантажити відгуки: ${err.message}</p>`;
  }
}

fetchAndDisplayComments();


// ============================================================
// 3. МОДАЛЬНЕ ВІКНО ФОРМИ ЗВОРОТНОГО ЗВ'ЯЗКУ (після 1 хвилини)
// ============================================================

const modal = document.getElementById("modal-overlay");
const closeBtn = document.getElementById("modal-close");
const feedbackForm = document.getElementById("feedback-form");

function openModal() {
  if (modal) modal.classList.remove("hidden");
}

function closeModal() {
  if (modal) modal.classList.add("hidden");
}

// Show modal after 1 minute (60 000 ms)
setTimeout(openModal, 60000);

if (closeBtn) closeBtn.addEventListener("click", closeModal);

// Close modal on overlay click (outside the form box)
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

if (feedbackForm) {
  feedbackForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById("submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Надсилання...";
    submitBtn.disabled = true;

    const formData = new FormData(feedbackForm);

    try {
      const response = await fetch(feedbackForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        // Success — show thank-you message
        feedbackForm.innerHTML = `
          <div class="form-success">
            <span class="form-success-icon">✅</span>
            <p>Дякуємо! Ваше повідомлення надіслано.</p>
          </div>`;
      } else {
        const data = await response.json().catch(() => ({}));
        const msg = data?.error || "Помилка при відправці форми.";
        showFormError(msg, submitBtn, originalText);
      }
    } catch {
      showFormError("Немає з'єднання з мережею.", submitBtn, originalText);
    }
  });
}

function showFormError(msg, btn, originalText) {
  // Remove old error if exists
  const old = feedbackForm.querySelector(".form-error");
  if (old) old.remove();

  const err = document.createElement("p");
  err.className = "form-error";
  err.textContent = msg;
  feedbackForm.insertBefore(err, btn);

  btn.textContent = originalText;
  btn.disabled = false;
}


// ============================================================
// 4. НІЧНИЙ / ДЕННИЙ РЕЖИМ
// ============================================================

const DARK_CLASS = "dark-mode";
const SESSION_KEY_THEME = "userThemeSess";

const toggleBtn = document.getElementById("theme-toggle");

function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add(DARK_CLASS);
    if (toggleBtn) toggleBtn.textContent = "☀️";
  } else {
    document.body.classList.remove(DARK_CLASS);
    if (toggleBtn) toggleBtn.textContent = "🌙";
  }
}

function isNightTime() {
  const hour = new Date().getHours();
  return hour >= 21 || hour < 7;
}

function initTheme() {
  const saved = sessionStorage.getItem(SESSION_KEY_THEME);
  if (saved === "dark") {
    applyTheme(true);
  } else if (saved === "light") {
    applyTheme(false);
  } else {
    // Автоматично по часу доби
    applyTheme(isNightTime());
  }
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains(DARK_CLASS);
    const newDark = !isDark;
    applyTheme(newDark);
    sessionStorage.setItem(SESSION_KEY_THEME, newDark ? "dark" : "light");
  });
}

initTheme();

// Перевіряємо кожну хвилину, чи змінилась година (якщо немає ручного вибору)
setInterval(() => {
  const saved = sessionStorage.getItem(SESSION_KEY_THEME);
  if (!saved) {
    applyTheme(isNightTime());
  }
}, 60000);
