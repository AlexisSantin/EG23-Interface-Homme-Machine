/**
 * ISI UI Battle – script.js
 *
 * Responsibilities:
 *  1. Fetch projects.json and parse the list of student projects.
 *  2. Dynamically render a project card for each entry.
 *  3. Handle the iframe modal ("View Project").
 *  4. Handle the prompt modal ("View Prompt") by fetching the team's prompt.md.
 */

/* ============================================================
   1. DOM References
   ============================================================ */
const grid        = document.getElementById('projects-grid');
const loadingMsg  = document.getElementById('loading-msg');
const emptyMsg    = document.getElementById('empty-msg');

// Iframe modal
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle   = document.getElementById('modal-title');
const modalIframe  = document.getElementById('modal-iframe');
const modalOpenTab = document.getElementById('modal-open-tab');
const modalClose   = document.getElementById('modal-close');

// Prompt modal
const promptModal       = document.getElementById('prompt-modal');
const promptModalTitle  = document.getElementById('prompt-modal-title');
const promptContent     = document.getElementById('prompt-content');
const promptClose       = document.getElementById('prompt-close');

/* ============================================================
   2. Load projects.json and render cards
   ============================================================ */
(async function init() {
  try {
    const response = await fetch('projects.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const projects = await response.json();

    // Hide the loading indicator
    loadingMsg.classList.add('hidden');

    if (!Array.isArray(projects) || projects.length === 0) {
      emptyMsg.classList.remove('hidden');
      return;
    }

    // Render one card per project
    projects.forEach(renderCard);

  } catch (err) {
    console.error('Failed to load projects.json:', err);
    loadingMsg.classList.add('hidden');
    emptyMsg.textContent = 'Could not load projects. Please try again later.';
    emptyMsg.classList.remove('hidden');
  }
})();

/* ============================================================
   3. Card rendering
   ============================================================ */

/**
 * Renders a single project card and appends it to the grid.
 *
 * Expected shape of `project`:
 * {
 *   "name":        "Team Rocket",
 *   "description": "A todo app built with AI in under 60 s.",
 *   "url":         "https://team-rocket.github.io/isi-project/",
 *   "screenshot":  "projects/team-rocket/screenshot.png",
 *   "promptFile":  "projects/team-rocket/prompt.md"
 * }
 *
 * @param {Object} project
 */
function renderCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';

  // --- Screenshot or placeholder ---
  let screenshotHTML;
  if (project.screenshot) {
    screenshotHTML = `
      <img
        class="card-screenshot"
        src="${escapeAttr(project.screenshot)}"
        alt="Screenshot of ${escapeAttr(project.name)}"
        loading="lazy"
        onerror="this.replaceWith(makePlaceholder())"
      />`;
  } else {
    screenshotHTML = `<div class="card-screenshot-placeholder" aria-hidden="true">🖼️</div>`;
  }

  // --- Card markup ---
  card.innerHTML = `
    ${screenshotHTML}
    <div class="card-body">
      <h2 class="card-name">${escapeHTML(project.name || 'Unnamed Project')}</h2>
      <p class="card-description">${escapeHTML(project.description || '')}</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary js-view-project">▶ View Project</button>
      ${project.promptFile
        ? `<button class="btn btn-ghost js-view-prompt">📄 View Prompt</button>`
        : ''}
    </div>
  `;

  // Attach event listeners
  card.querySelector('.js-view-project')
      .addEventListener('click', () => openProjectModal(project));

  const promptBtn = card.querySelector('.js-view-prompt');
  if (promptBtn) {
    promptBtn.addEventListener('click', () => openPromptModal(project));
  }

  grid.appendChild(card);
}

/* ============================================================
   4. Iframe (project) modal
   ============================================================ */

/**
 * Opens the full-screen iframe modal for the given project.
 * @param {Object} project
 */
function openProjectModal(project) {
  modalTitle.textContent = project.name || 'Project Preview';
  modalOpenTab.href = project.url || '#';
  modalIframe.src = project.url || 'about:blank';
  modalOverlay.classList.add('active');
  // Trap focus inside modal for accessibility
  modalClose.focus();
}

/** Closes the iframe modal and clears the iframe src to stop any media. */
function closeProjectModal() {
  modalOverlay.classList.remove('active');
  modalIframe.src = 'about:blank';
}

// Close when clicking the close button
modalClose.addEventListener('click', closeProjectModal);

// Close when clicking outside the modal bar / iframe bar area (the dark overlay itself)
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeProjectModal();
});

/* ============================================================
   5. Prompt modal
   ============================================================ */

/**
 * Fetches the project's prompt.md and displays it in the prompt modal.
 * @param {Object} project
 */
async function openPromptModal(project) {
  promptModalTitle.textContent = `Prompt – ${project.name || 'Project'}`;
  promptContent.textContent = 'Loading…';
  promptModal.classList.add('active');
  promptClose.focus();

  try {
    const res = await fetch(project.promptFile);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    promptContent.textContent = await res.text();
  } catch (err) {
    promptContent.textContent = `Could not load prompt file: ${err.message}`;
  }
}

/** Closes the prompt modal. */
function closePromptModal() {
  promptModal.classList.remove('active');
}

promptClose.addEventListener('click', closePromptModal);

promptModal.addEventListener('click', (e) => {
  if (e.target === promptModal) closePromptModal();
});

/* ============================================================
   6. Keyboard accessibility
   ============================================================ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (promptModal.classList.contains('active')) closePromptModal();
    else if (modalOverlay.classList.contains('active')) closeProjectModal();
  }
});

/* ============================================================
   7. Helpers
   ============================================================ */

/**
 * Escapes a string for safe insertion into HTML text content.
 * @param {string} str
 * @returns {string}
 */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Escapes a string for safe insertion into an HTML attribute value.
 * @param {string} str
 * @returns {string}
 */
function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Creates a placeholder div used when a screenshot image fails to load.
 * Called inline via the img onerror attribute.
 * @returns {HTMLElement}
 */
function makePlaceholder() {
  const div = document.createElement('div');
  div.className = 'card-screenshot-placeholder';
  div.setAttribute('aria-hidden', 'true');
  div.textContent = '🖼️';
  return div;
}

// Expose makePlaceholder globally so the inline onerror handler can call it
window.makePlaceholder = makePlaceholder;
