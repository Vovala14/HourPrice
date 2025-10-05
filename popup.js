// ========================================
// POPUP.JS - FINAL WORKING VERSION
// ========================================

console.log('🎉 Extension loading...');

// ====== STATE ======
const state = {
  categories: [
    { id: 'general', name: 'כללי', icon: '🛒', thresholds: { green: 2, amber: 6 } },
    { id: 'furniture', name: 'רהיטים', icon: '🛋️', thresholds: { green: 4, amber: 12 } },
    { id: 'clothes', name: 'בגדים', icon: '👕', thresholds: { green: 2, amber: 5 } },
    { id: 'entertainment', name: 'בילויים', icon: '🎮', thresholds: { green: 1.5, amber: 4 } },
    { id: 'electronics', name: 'אלקטרוניקה', icon: '📱', thresholds: { green: 3, amber: 8 } },
    { id: 'food', name: 'אוכל', icon: '🍕', thresholds: { green: 1, amber: 3 } },
    { id: 'health', name: 'בריאות', icon: '💊', thresholds: { green: 3, amber: 7 } },
    { id: 'education', name: 'השכלה', icon: '📚', thresholds: { green: 5, amber: 15 } },
    { id: 'travel', name: 'נסיעות', icon: '✈️', thresholds: { green: 8, amber: 20 } }
  ],
  wageProfiles: [
    { id: 1, name: 'עבודה ראשית', hourlyWage: 60 }
  ],
  selectedCategory: 'general',
  selectedProfile: 1,
  currentItem: null,
  pendingItems: [],
  wishlistItems: [],
  historyItems: [],
  darkMode: false,
  fontSize: 'normal'
};

let editingProfileId = null;

// ====== UTILITIES ======
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function announce(msg) {
  const announcer = $('#announcer');
  if (announcer) {
    announcer.textContent = msg;
    setTimeout(() => announcer.textContent = '', 100);
  }
}

function getCategoryById(id) {
  return state.categories.find(c => c.id === id) || state.categories[0];
}

function getDecisionColor(hours, categoryId) {
  const cat = getCategoryById(categoryId);
  if (hours <= cat.thresholds.green) return 'green';
  if (hours <= cat.thresholds.amber) return 'amber';
  return 'red';
}

function getDecisionText(color) {
  if (color === 'green') return 'שווה לקנות';
  if (color === 'amber') return 'שווה לשקול';
  return 'כנראה לוותר';
}

// ====== RENDER FUNCTIONS ======

function renderCategoryGrid() {
  const grid = $('#categoryGrid');
  if (!grid) return;
  
  grid.innerHTML = state.categories.map(cat => `
    <button class="category-btn ${state.selectedCategory === cat.id ? 'active' : ''}"
            data-category="${cat.id}" type="button">
      <span class="category-icon">${cat.icon}</span>
      <span class="category-name">${cat.name}</span>
    </button>
  `).join('');
}

function renderWageSelect() {
  const select = $('#wageSelect');
  if (!select) return;
  
  select.innerHTML = state.wageProfiles.map(p => `
    <option value="${p.id}">${p.name} - ${p.hourlyWage} ₪/שעה</option>
  `).join('');
  select.value = state.selectedProfile;
}

function renderWageProfiles() {
  const list = $('#wageProfilesList');
  if (!list) return;
  
  console.log('💰 Rendering', state.wageProfiles.length, 'profiles');
  list.innerHTML = '';
  
  state.wageProfiles.forEach(profile => {
    const div = document.createElement('div');
    div.className = 'wage-profile-item';
    
    const info = document.createElement('div');
    info.className = 'wage-profile-info';
    info.innerHTML = `
      <div class="wage-profile-name">${profile.name}</div>
      <div class="wage-profile-wage">${profile.hourlyWage} ₪ לשעה</div>
    `;
    
    const actions = document.createElement('div');
    actions.className = 'wage-profile-actions';
    
    // Edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-small btn-edit';
    editBtn.type = 'button';
    editBtn.innerHTML = '✏️ ערוך';
    editBtn.onclick = () => {
      console.log('✏️ Edit clicked, ID:', profile.id);
      openEditModal(profile.id);
    };
    
    actions.appendChild(editBtn);
    
    // Delete button (only if more than 1 profile)
    if (state.wageProfiles.length > 1) {
      const delBtn = document.createElement('button');
      delBtn.className = 'btn-small btn-delete';
      delBtn.type = 'button';
      delBtn.innerHTML = '🗑️';
      delBtn.onclick = () => {
        console.log('🗑️ Delete clicked, ID:', profile.id);
        handleDeleteProfile(profile.id);
      };
      actions.appendChild(delBtn);
    }
    
    div.appendChild(info);
    div.appendChild(actions);
    list.appendChild(div);
  });
  
  console.log('✅ Profiles rendered');
}

function renderPendingList() {
  const list = $('#pendingList');
  if (!list) return;
  
  if (state.pendingItems.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">⏰</div><p>אין פריטים ממתינים</p></div>';
  } else {
    list.innerHTML = '<p>יש ' + state.pendingItems.length + ' פריטים</p>';
  }
}

function renderWishlist() {
  const list = $('#wishlistList');
  if (!list) return;
  
  if (state.wishlistItems.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📝</div><p>רשימת המשאלות ריקה</p></div>';
  }
}

function renderHistory() {
  const list = $('#historyList');
  if (!list) return;
  
  if (state.historyItems.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📊</div><p>אין היסטוריה</p></div>';
  }
}

function render() {
  console.log('🎨 Rendering...');
  renderCategoryGrid();
  renderWageSelect();
  renderWageProfiles();
  renderPendingList();
  renderWishlist();
  renderHistory();
}

// ====== WAGE PROFILE FUNCTIONS ======

function openEditModal(profileId) {
  console.log('🔧 Opening edit modal for ID:', profileId, 'Type:', typeof profileId);
  
  const modal = $('#wageProfileModal');
  const title = $('#wageProfileModalTitle');
  const nameInput = $('#profileNameInput');
  const wageInput = $('#hourlyWageInput');
  
  if (!modal || !nameInput || !wageInput) {
    console.error('❌ Modal elements missing!');
    return;
  }
  
  editingProfileId = profileId;
  
  const profile = state.wageProfiles.find(p => p.id === profileId);
  
  if (profile) {
    console.log('✏️ Found profile:', profile);
    title.textContent = 'ערוך פרופיל שכר';
    nameInput.value = profile.name;
    wageInput.value = profile.hourlyWage;
  } else {
    console.error('❌ Profile not found!');
    return;
  }
  
  modal.classList.remove('hidden');
  setTimeout(() => nameInput.focus(), 100);
  console.log('✅ Modal opened');
}

function openNewModal() {
  console.log('➕ Opening new profile modal');
  
  const modal = $('#wageProfileModal');
  const title = $('#wageProfileModalTitle');
  const nameInput = $('#profileNameInput');
  const wageInput = $('#hourlyWageInput');
  
  if (!modal || !nameInput || !wageInput) return;
  
  editingProfileId = null;
  title.textContent = 'פרופיל שכר חדש';
  nameInput.value = '';
  wageInput.value = '';
  
  modal.classList.remove('hidden');
  setTimeout(() => nameInput.focus(), 100);
}

function handleSaveProfile() {
  console.log('💾 Saving profile...');
  
  const nameInput = $('#profileNameInput');
  const wageInput = $('#hourlyWageInput');
  const modal = $('#wageProfileModal');
  
  if (!nameInput || !wageInput) return;
  
  const name = nameInput.value.trim();
  const wage = parseFloat(wageInput.value);
  
  if (!name || !wage || wage <= 0) {
    alert('נא למלא את כל השדות');
    return;
  }
  
  if (editingProfileId !== null) {
    // Edit
    const profile = state.wageProfiles.find(p => p.id === editingProfileId);
    if (profile) {
      profile.name = name;
      profile.hourlyWage = wage;
      console.log('✏️ Updated:', profile);
    }
  } else {
    // New
    const newProfile = {
      id: Date.now(),
      name: name,
      hourlyWage: wage
    };
    state.wageProfiles.push(newProfile);
    state.selectedProfile = newProfile.id;
    console.log('➕ Added:', newProfile);
  }
  
  // Save
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ 
      wageProfiles: state.wageProfiles,
      selectedProfile: state.selectedProfile
    });
  }
  
  modal.classList.add('hidden');
  render();
  announce('פרופיל נשמר');
  console.log('✅ Saved!');
}

function handleDeleteProfile(profileId) {
  console.log('🗑️ Delete profile:', profileId);
  
  if (state.wageProfiles.length === 1) {
    alert('חייב להשאיר לפחות פרופיל אחד');
    return;
  }
  
  const profile = state.wageProfiles.find(p => p.id === profileId);
  if (!profile) return;
  
  if (!confirm(`למחוק את "${profile.name}"?`)) {
    console.log('❌ Cancelled');
    return;
  }
  
  state.wageProfiles = state.wageProfiles.filter(p => p.id !== profileId);
  
  if (state.selectedProfile === profileId) {
    state.selectedProfile = state.wageProfiles[0].id;
  }
  
  // Save
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ 
      wageProfiles: state.wageProfiles,
      selectedProfile: state.selectedProfile
    });
  }
  
  render();
  announce('פרופיל נמחק');
  console.log('✅ Deleted!');
}

// ====== CALCULATOR ======

function calculate() {
  const priceInput = $('#priceInput');
  if (!priceInput) return;
  
  const price = parseFloat(priceInput.value);
  const profile = state.wageProfiles.find(p => p.id === state.selectedProfile);
  
  if (!price || !profile) return;
  
  const hours = price / profile.hourlyWage;
  const category = getCategoryById(state.selectedCategory);
  const color = getDecisionColor(hours, state.selectedCategory);
  
  state.currentItem = {
    price,
    hours,
    categoryId: state.selectedCategory,
    profileId: state.selectedProfile
  };
  
  const resultCard = $('#resultCard');
  if (resultCard) {
    resultCard.classList.remove('hidden');
    
    const resultCat = $('.result-category');
    if (resultCat) {
      resultCat.innerHTML = `<span style="font-size:2rem">${category.icon}</span> ${category.name}`;
    }
    
    const hoursEl = $('.result-hours');
    if (hoursEl) {
      hoursEl.textContent = hours.toFixed(1);
      hoursEl.className = `result-hours ${color}`;
    }
    
    const statusEl = $('.result-status');
    if (statusEl) {
      statusEl.textContent = getDecisionText(color);
      statusEl.className = `result-status ${color}`;
    }
  }
  
  announce(`${hours.toFixed(1)} שעות`);
}

// ====== NAVIGATION ======

function switchScreen(screenName) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $$('.nav-tab').forEach(t => t.classList.remove('active'));
  
  const screen = $(`#${screenName}Screen`);
  const tab = $(`.nav-tab[data-screen="${screenName}"]`);
  
  if (screen) screen.classList.add('active');
  if (tab) tab.classList.add('active');
}

// ====== EVENT LISTENERS ======

function initEvents() {
  console.log('🎧 Setting up events...');
  
  // Nav tabs
  $$('.nav-tab').forEach(tab => {
    tab.onclick = (e) => switchScreen(e.currentTarget.dataset.screen);
  });
  
  // Category selection
  document.addEventListener('click', (e) => {
    const catBtn = e.target.closest('.category-btn');
    if (catBtn) {
      state.selectedCategory = catBtn.dataset.category;
      renderCategoryGrid();
    }
  });
  
  // Wage select
  const wageSelect = $('#wageSelect');
  if (wageSelect) {
    wageSelect.onchange = (e) => {
      state.selectedProfile = parseInt(e.target.value);
    };
  }
  
  // Calculate
  const calcBtn = $('#calculateBtn');
  if (calcBtn) {
    calcBtn.onclick = calculate;
  }
  
  // Price input - Enter
  const priceInput = $('#priceInput');
  if (priceInput) {
    priceInput.onkeypress = (e) => {
      if (e.key === 'Enter') calculate();
    };
  }
  
  // Dark mode
  const darkBtn = $('#darkModeBtn');
  if (darkBtn) {
    darkBtn.onclick = () => {
      state.darkMode = !state.darkMode;
      document.body.classList.toggle('dark-mode');
      darkBtn.textContent = state.darkMode ? '☀️' : '🌙';
    };
  }
  
  // Settings
  const settingsBtn = $('#settingsBtn');
  const settingsPanel = $('#settingsPanel');
  const closeSettings = $('#closeSettings');
  
  if (settingsBtn && settingsPanel) {
    settingsBtn.onclick = () => settingsPanel.classList.toggle('hidden');
  }
  if (closeSettings) {
    closeSettings.onclick = () => settingsPanel.classList.add('hidden');
  }
  
  // Add wage profile
  const addProfileBtn = $('#addWageProfileBtn');
  if (addProfileBtn) {
    addProfileBtn.onclick = openNewModal;
  }
  
  // Save profile
  const saveProfileBtn = $('#saveProfileBtn');
  if (saveProfileBtn) {
    saveProfileBtn.onclick = handleSaveProfile;
  }
  
  // Profile inputs - Enter
  const nameInput = $('#profileNameInput');
  const wageInput = $('#hourlyWageInput');
  if (nameInput && wageInput) {
    nameInput.onkeypress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        wageInput.focus();
      }
    };
    wageInput.onkeypress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSaveProfile();
      }
    };
  }
  
  // Close modals
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
    if (e.target.classList.contains('close-btn') || e.target.classList.contains('close-modal')) {
      const modal = e.target.closest('.modal');
      const panel = e.target.closest('.panel');
      if (modal) modal.classList.add('hidden');
      if (panel) panel.classList.add('hidden');
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.altKey && !e.ctrlKey) {
      if (e.key === '1') { e.preventDefault(); switchScreen('home'); }
      if (e.key === '2') { e.preventDefault(); switchScreen('pending'); }
      if (e.key === '3') { e.preventDefault(); switchScreen('wishlist'); }
      if (e.key === '4') { e.preventDefault(); switchScreen('history'); }
      if (e.key === 'd') { e.preventDefault(); darkBtn?.click(); }
      if (e.key === 's') { e.preventDefault(); settingsBtn?.click(); }
    }
    
    if (e.key === 'Escape') {
      const modal = $('.modal:not(.hidden)');
      const panel = $('.panel:not(.hidden)');
      if (modal) modal.classList.add('hidden');
      if (panel) panel.classList.add('hidden');
    }
  });
  
  console.log('✅ Events ready');
}

// ====== INIT ======

function init() {
  console.log('🚀 Initializing...');
  
  const required = ['categoryGrid', 'wageSelect', 'priceInput', 'calculateBtn'];
  let allOk = true;
  
  required.forEach(id => {
    if (!$('#' + id)) {
      console.error('❌ Missing:', id);
      allOk = false;
    }
  });
  
  if (!allOk) {
    console.error('❌ Init failed!');
    return;
  }
  
  initEvents();
  render();
  
  console.log('✅ Ready!');
}

// ====== START ======

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Make functions global for testing
window.openEditModal = openEditModal;
window.handleDeleteProfile = handleDeleteProfile;
window.state = state;

console.log('✅ Script loaded!');