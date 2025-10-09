// ========================================
// POPUP.JS - COMPLETE WITH i18n (EN/HE)
// ========================================

console.log('🎉 Extension loading...');

// ====== TRANSLATIONS ======
const translations = {
  he: {
    title: 'כמה שעות עבודה?',
    calculator: 'מחשבון',
    pending: 'ממתינים',
    wishlist: 'רשימה',
    history: 'היסטוריה',
    settings: 'הגדרות',
    category: 'קטגוריה',
    price: 'מחיר',
    calculate: 'חשב',
    wageProfile: 'פרופיל שכר',
    hoursOfWork: 'שעות עבודה',
    worthBuying: 'שווה לקנות',
    worthConsidering: 'שווה לשקול',
    probablySkip: 'כנראה לוותר',
    wait24h: 'חכה 24 שעות',
    wait48h: 'חכה 48 שעות',
    wait72h: 'חכה 72 שעות',
    saveToWishlist: 'שמור לרשימת משאלות',
    wageProfiles: 'פרופילי שכר',
    addNewProfile: '➕ הוסף פרופיל חדש',
    accessibility: 'נגישות',
    fontSize: 'גודל גופן',
    small: 'קטן',
    normal: 'רגיל',
    large: 'גדול',
    highContrast: 'ניגודיות גבוהה',
    noPendingItems: 'אין פריטים ממתינים',
    emptyWishlist: 'רשימת המשאלות ריקה',
    noHistory: 'אין היסטוריה',
    itemName: 'מה שם הפריט?',
    itemPlaceholder: 'למשל: אוזניות ביטול רעש',
    save: 'שמור',
    cancel: 'ביטול',
    edit: '✏️ ערוך',
    delete: '🗑️',
    editProfile: 'ערוך פרופיל שכר',
    newProfile: 'פרופיל שכר חדש',
    profileName: 'שם הפרופיל',
    profilePlaceholder: 'למשל: עבודה משנית',
    wageType: 'סוג שכר',
    hourlyWage: 'שכר שעתי',
    monthlyWage: 'שכר חודשי',
    hourlyWageLabel: 'שכר לשעה',
    monthlyWageLabel: 'שכר חודשי',
    hoursPerMonth: 'שעות עבודה בחודש',
    hoursPerMonthHint: 'ברירת מחדל: 186 שעות',
    isGross: 'השכר הוא ברוטו (לפני ניכויים)',
    isGrossHint: 'אם מסומן, נחשב אוטומטית את השכר נטו',
    deleteConfirm: 'למחוק את הפריט?',
    deleteProfileConfirm: 'למחוק את',
    mustKeepOne: 'חייב להשאיר לפחות פרופיל אחד',
    fillAllFields: 'נא למלא את כל השדות',
    fillName: 'נא למלא שם פרופיל',
    fillHourlyWage: 'נא למלא שכר שעתי תקין',
    fillMonthlyWage: 'נא למלא שכר חודשי תקין',
    fillItemName: 'נא למלא שם פריט',
    fillPrice: 'נא להכניס מחיר תקין',
    profileSaved: 'פרופיל נשמר',
    profileDeleted: 'פרופיל נמחק',
    itemDeleted: 'הפריט נמחק',
    addedToPending: 'הפריט נוסף לרשימת המתנה',
    addedToWishlist: 'הפריט נוסף לרשימת המשאלות',
    markedAsBought: 'נרשם כקנייה',
    markedAsSkipped: 'נרשם כוויתור',
    movedToPending: 'הפריט הועבר להמתנה',
    timeLeft: 'נותרו',
    timeExpired: '⚠️ הזמן עבר - החלט עכשיו!',
    buy: 'קנה',
    skip: 'וותר',
    moveToPending: 'העבר להמתנה ⏰',
    bought: '✅ נקנה',
    skipped: '❌ ויתרתי',
    boughtCount: 'נקנו',
    skippedCount: 'ויתרתי',
    hoursSpent: 'שעות הוצאו',
    askWaitTime: 'כמה שעות המתנה? (24/48/72)',
    invalidHours: 'מספר שעות לא תקין',
    currency: '₪',
    hours: 'שעות',
    hour: 'שעה',
    perHour: '/שעה',
    perMonth: '/חודש',
    gross: '(ברוטו)',
    defaultProfileName: 'עבודה ראשית',
    categories: {
      general: 'כללי',
      furniture: 'רהיטים',
      clothes: 'בגדים',
      entertainment: 'בילויים',
      electronics: 'אלקטרוניקה',
      food: 'אוכל',
      health: 'בריאות',
      education: 'השכלה',
      travel: 'נסיעות'
    }
  },
  en: {
    title: 'How Many Work Hours?',
    calculator: 'Calculator',
    pending: 'Pending',
    wishlist: 'Wishlist',
    history: 'History',
    settings: 'Settings',
    category: 'Category',
    price: 'Price',
    calculate: 'Calculate',
    wageProfile: 'Wage Profile',
    hoursOfWork: 'Hours of Work',
    worthBuying: 'Worth Buying',
    worthConsidering: 'Worth Considering',
    probablySkip: 'Probably Skip',
    wait24h: 'Wait 24 Hours',
    wait48h: 'Wait 48 Hours',
    wait72h: 'Wait 72 Hours',
    saveToWishlist: 'Save to Wishlist',
    wageProfiles: 'Wage Profiles',
    addNewProfile: '➕ Add New Profile',
    accessibility: 'Accessibility',
    fontSize: 'Font Size',
    small: 'Small',
    normal: 'Normal',
    large: 'Large',
    highContrast: 'High Contrast',
    noPendingItems: 'No pending items',
    emptyWishlist: 'Wishlist is empty',
    noHistory: 'No history',
    itemName: "What's the item name?",
    itemPlaceholder: 'e.g., Noise Cancelling Headphones',
    save: 'Save',
    cancel: 'Cancel',
    edit: '✏️ Edit',
    delete: '🗑️',
    editProfile: 'Edit Wage Profile',
    newProfile: 'New Wage Profile',
    profileName: 'Profile Name',
    profilePlaceholder: 'e.g., Freelance Work',
    wageType: 'Wage Type',
    hourlyWage: 'Hourly Wage',
    monthlyWage: 'Monthly Wage',
    hourlyWageLabel: 'Hourly Wage',
    monthlyWageLabel: 'Monthly Wage',
    hoursPerMonth: 'Hours per Month',
    hoursPerMonthHint: 'Default: 186 hours',
    isGross: 'Wage is gross (before deductions)',
    isGrossHint: 'If checked, net wage will be calculated automatically',
    deleteConfirm: 'Delete this item?',
    deleteProfileConfirm: 'Delete',
    mustKeepOne: 'Must keep at least one profile',
    fillAllFields: 'Please fill all fields',
    fillName: 'Please enter profile name',
    fillHourlyWage: 'Please enter valid hourly wage',
    fillMonthlyWage: 'Please enter valid monthly wage',
    fillItemName: 'Please enter item name',
    fillPrice: 'Please enter a valid price',
    profileSaved: 'Profile saved',
    profileDeleted: 'Profile deleted',
    itemDeleted: 'Item deleted',
    addedToPending: 'Item added to pending list',
    addedToWishlist: 'Item added to wishlist',
    markedAsBought: 'Marked as bought',
    markedAsSkipped: 'Marked as skipped',
    movedToPending: 'Item moved to pending',
    timeLeft: 'Time left:',
    timeExpired: '⚠️ Time expired - decide now!',
    buy: 'Buy',
    skip: 'Skip',
    moveToPending: 'Move to Pending ⏰',
    bought: '✅ Bought',
    skipped: '❌ Skipped',
    boughtCount: 'Bought',
    skippedCount: 'Skipped',
    hoursSpent: 'Hours Spent',
    askWaitTime: 'How many hours to wait? (24/48/72)',
    invalidHours: 'Invalid number of hours',
    currency: '$',
    hours: 'hours',
    hour: 'hour',
    perHour: '/hr',
    perMonth: '/mo',
    gross: '(gross)',
    defaultProfileName: 'Main Job',
    categories: {
      general: 'General',
      furniture: 'Furniture',
      clothes: 'Clothes',
      entertainment: 'Entertainment',
      electronics: 'Electronics',
      food: 'Food',
      health: 'Health',
      education: 'Education',
      travel: 'Travel'
    }
  }
};

// ====== STATE ======
const state = {
  categories: [
    { id: 'general', icon: '🛒', thresholds: { green: 2, amber: 6 } },
    { id: 'furniture', icon: '🛋️', thresholds: { green: 4, amber: 12 } },
    { id: 'clothes', icon: '👕', thresholds: { green: 2, amber: 5 } },
    { id: 'entertainment', icon: '🎮', thresholds: { green: 1.5, amber: 4 } },
    { id: 'electronics', icon: '📱', thresholds: { green: 3, amber: 8 } },
    { id: 'food', icon: '🍕', thresholds: { green: 1, amber: 3 } },
    { id: 'health', icon: '💊', thresholds: { green: 3, amber: 7 } },
    { id: 'education', icon: '📚', thresholds: { green: 5, amber: 15 } },
    { id: 'travel', icon: '✈️', thresholds: { green: 8, amber: 20 } }
  ],
  wageProfiles: [
    { 
      id: 1, 
      name: 'Main Job',
      wageType: 'hourly',
      hourlyWage: 60,
      monthlyWage: 12000,
      monthlyHours: 186,
      isGross: false
    }
  ],
  selectedCategory: 'general',
  selectedProfile: 1,
  currentItem: null,
  pendingItems: [],
  wishlistItems: [],
  historyItems: [],
  darkMode: false,
  fontSize: 'normal',
  language: 'en'
};

let editingProfileId = null;
let pendingWaitHours = null;

// ====== i18n HELPER ======
function t(key) {
  const keys = key.split('.');
  let value = translations[state.language];
  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }
  return value;
}

function setLanguage(lang) {
  state.language = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  document.body.style.textAlign = lang === 'he' ? 'right' : 'left';
  
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ language: lang });
  }
  
  render();
  updateStaticText();
}

function updateStaticText() {
  const title = $('h1');
  if (title) title.textContent = t('title');
  
  const tabs = $$('.nav-tab');
  if (tabs[0]) tabs[0].textContent = t('calculator');
  if (tabs[1]) {
    const badge = tabs[1].querySelector('.badge');
    tabs[1].childNodes[0].textContent = t('pending') + ' ';
    if (badge) tabs[1].appendChild(badge);
  }
  if (tabs[2]) tabs[2].textContent = t('wishlist');
  if (tabs[3]) tabs[3].textContent = t('history');
  
  const categoryLabel = document.querySelector('label[for="categorySelect"]');
  if (categoryLabel) categoryLabel.textContent = t('category');
  
  const priceLabel = document.querySelector('label[for="priceInput"]');
  if (priceLabel) priceLabel.textContent = `${t('price')} (${t('currency')})`;
  
  const wageLabel = document.querySelector('label[for="wageSelect"]');
  if (wageLabel) wageLabel.textContent = t('wageProfile');
  
  const calcBtn = $('#calculateBtn');
  if (calcBtn) calcBtn.textContent = t('calculate');
  
  const resultLabel = $('.result-label');
  if (resultLabel) resultLabel.textContent = t('hoursOfWork');
  
  const waitBtns = $$('.result-actions button[data-wait]');
  if (waitBtns[0]) waitBtns[0].textContent = t('wait24h');
  if (waitBtns[1]) waitBtns[1].textContent = t('wait48h');
  if (waitBtns[2]) waitBtns[2].textContent = t('wait72h');
  
  const wishlistBtn = $('#addToWishlistBtn');
  if (wishlistBtn) wishlistBtn.textContent = t('saveToWishlist');
  
  const settingsTitle = $('.panel-header h2');
  if (settingsTitle) settingsTitle.textContent = t('settings');
  
  const wageProfilesTitle = $('.setting-group h3');
  if (wageProfilesTitle) wageProfilesTitle.textContent = t('wageProfiles');
  
  const addProfileBtn = $('#addWageProfileBtn');
  if (addProfileBtn) addProfileBtn.textContent = t('addNewProfile');
  
  // Update all modal buttons
  const saveItemBtn = $('#saveItemBtn');
  if (saveItemBtn) saveItemBtn.textContent = t('save');
  
  const saveProfileBtn = $('#saveProfileBtn');
  if (saveProfileBtn) saveProfileBtn.textContent = t('save');
  
  const cancelBtns = $('.close-modal');
  cancelBtns.forEach(btn => btn.textContent = t('cancel'));
}

// ====== WAGE CALCULATION ======
function calculateNetFromGross(amount, type) {
  if (type === 'hourly') {
    return amount * 0.75;
  }
  if (amount <= 6790) return amount * 0.90;
  if (amount <= 9730) return amount * 0.83;
  if (amount <= 15620) return amount * 0.77;
  if (amount <= 21710) return amount * 0.72;
  return amount * 0.68;
}

function getEffectiveHourlyWage(profile) {
  if (!profile) return 60;
  
  let hourlyWage;
  
  if (profile.wageType === 'monthly') {
    const monthlyWage = parseFloat(profile.monthlyWage) || 12000;
    const monthlyHours = parseInt(profile.monthlyHours) || 186;
    const wage = profile.isGross 
      ? calculateNetFromGross(monthlyWage, 'monthly')
      : monthlyWage;
    hourlyWage = wage / monthlyHours;
  } else {
    const hourly = parseFloat(profile.hourlyWage) || 60;
    hourlyWage = profile.isGross
      ? calculateNetFromGross(hourly, 'hourly')
      : hourly;
  }
  
  if (isNaN(hourlyWage) || hourlyWage <= 0) {
    return 60;
  }
  
  return hourlyWage;
}

function formatWageForDisplay(profile) {
  const hourly = getEffectiveHourlyWage(profile).toFixed(0);
  
  if (profile.wageType === 'monthly') {
    const gross = profile.isGross ? ` ${t('gross')}` : '';
    return `${profile.monthlyWage}${t('currency')}${t('perMonth')}${gross} → ${hourly}${t('currency')}${t('perHour')}`;
  } else {
    const gross = profile.isGross ? ` ${t('gross')}` : '';
    return `${profile.hourlyWage}${t('currency')}${t('perHour')}${gross}`;
  }
}

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
  if (color === 'green') return t('worthBuying');
  if (color === 'amber') return t('worthConsidering');
  return t('probablySkip');
}

// ====== RENDER FUNCTIONS ======

function renderCategoryGrid() {
  const grid = $('#categoryGrid');
  if (!grid) return;
  
  grid.innerHTML = state.categories.map(cat => `
    <button class="category-btn ${state.selectedCategory === cat.id ? 'active' : ''}"
            data-category="${cat.id}" type="button">
      <span class="category-icon">${cat.icon}</span>
      <span class="category-name">${t('categories.' + cat.id)}</span>
    </button>
  `).join('');
}

function renderWageSelect() {
  const select = $('#wageSelect');
  if (!select) return;
  
  select.innerHTML = state.wageProfiles.map(p => `
    <option value="${p.id}">${p.name} - ${formatWageForDisplay(p)}</option>
  `).join('');
  select.value = state.selectedProfile;
}

function renderWageProfiles() {
  const list = $('#wageProfilesList');
  if (!list) return;
  
  list.innerHTML = '';
  
  state.wageProfiles.forEach(profile => {
    const div = document.createElement('div');
    div.className = 'wage-profile-item';
    
    const info = document.createElement('div');
    info.className = 'wage-profile-info';
    info.innerHTML = `
      <div class="wage-profile-name">${profile.name}</div>
      <div class="wage-profile-wage">${formatWageForDisplay(profile)}</div>
    `;
    
    const actions = document.createElement('div');
    actions.className = 'wage-profile-actions';
    
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-small btn-edit';
    editBtn.type = 'button';
    editBtn.innerHTML = t('edit');
    editBtn.onclick = () => openEditModal(profile.id);
    
    actions.appendChild(editBtn);
    
    if (state.wageProfiles.length > 1) {
      const delBtn = document.createElement('button');
      delBtn.className = 'btn-small btn-delete';
      delBtn.type = 'button';
      delBtn.innerHTML = t('delete');
      delBtn.onclick = () => handleDeleteProfile(profile.id);
      actions.appendChild(delBtn);
    }
    
    div.appendChild(info);
    div.appendChild(actions);
    list.appendChild(div);
  });
}

function renderPendingList() {
  const list = $('#pendingList');
  if (!list) return;
  
  if (state.pendingItems.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">⏰</div><p>${t('noPendingItems')}</p></div>`;
    return;
  }
  
  list.innerHTML = '';
  
  state.pendingItems.forEach(item => {
    const timeLeft = item.waitUntil - Date.now();
    const hoursLeft = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60)));
    const minutesLeft = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    const isExpired = timeLeft <= 0;
    
    const category = getCategoryById(item.categoryId);
    const color = getDecisionColor(item.hours, item.categoryId);
    
    const itemEl = document.createElement('div');
    itemEl.className = 'list-item';
    itemEl.innerHTML = `
      <div class="list-item-header">
        <div class="list-item-title">
          <span style="font-size: 1.5rem;">${category.icon}</span>
          <h3>${item.name}</h3>
        </div>
        <button class="btn-icon" data-delete="${item.id}" title="${t('delete')}">🗑️</button>
      </div>
      <div class="list-item-meta">
        <div style="display: flex; gap: 16px; margin-bottom: 8px;">
          <span>💰 ${item.price}${t('currency')}</span>
          <span class="result-hours ${color}" style="font-size: 1rem;">${item.hours.toFixed(1)} ${t('hours')}</span>
        </div>
      </div>
      <div class="timer ${isExpired ? 'expired' : ''}">
        <span>⏰</span>
        <span>${isExpired ? t('timeExpired') : `${t('timeLeft')} ${hoursLeft}h ${minutesLeft}m`}</span>
      </div>
      ${isExpired ? `
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <button class="btn btn-primary" data-buy="${item.id}" style="flex: 1; padding: 8px;">${t('buy')}</button>
          <button class="btn btn-secondary" data-skip="${item.id}" style="flex: 1; padding: 8px;">${t('skip')}</button>
        </div>
      ` : ''}
    `;
    
    list.appendChild(itemEl);
  });
  
  const badge = $('#pendingBadge');
  if (badge) {
    const expiredCount = state.pendingItems.filter(i => i.waitUntil <= Date.now()).length;
    if (expiredCount > 0) {
      badge.textContent = expiredCount;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
  
  $$('[data-delete]').forEach(btn => {
    btn.onclick = () => handleDeletePendingItem(parseInt(btn.dataset.delete));
  });
  
  $$('[data-buy]').forEach(btn => {
    btn.onclick = () => handleBuyItem(parseInt(btn.dataset.buy));
  });
  
  $$('[data-skip]').forEach(btn => {
    btn.onclick = () => handleSkipItem(parseInt(btn.dataset.skip));
  });
}

function renderWishlist() {
  const list = $('#wishlistList');
  if (!list) return;
  
  if (state.wishlistItems.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📝</div><p>${t('emptyWishlist')}</p></div>`;
    return;
  }
  
  list.innerHTML = '';
  
  state.wishlistItems.forEach(item => {
    const category = getCategoryById(item.categoryId);
    const color = getDecisionColor(item.hours, item.categoryId);
    
    const itemEl = document.createElement('div');
    itemEl.className = 'list-item';
    itemEl.innerHTML = `
      <div class="list-item-header">
        <div class="list-item-title">
          <span style="font-size: 1.5rem;">${category.icon}</span>
          <h3>${item.name}</h3>
        </div>
        <button class="btn-icon" data-delete-wishlist="${item.id}" title="${t('delete')}">🗑️</button>
      </div>
      <div class="list-item-meta">
        <div style="display: flex; gap: 16px; margin-bottom: 8px;">
          <span>💰 ${item.price}${t('currency')}</span>
          <span class="result-hours ${color}" style="font-size: 1rem;">${item.hours.toFixed(1)} ${t('hours')}</span>
        </div>
      </div>
      <button class="btn btn-primary" data-move-pending="${item.id}" style="margin-top: 12px; padding: 8px;">${t('moveToPending')}</button>
    `;
    
    list.appendChild(itemEl);
  });
  
  $$('[data-delete-wishlist]').forEach(btn => {
    btn.onclick = () => handleDeleteWishlistItem(parseInt(btn.dataset.deleteWishlist));
  });
  
  $$('[data-move-pending]').forEach(btn => {
    btn.onclick = () => handleMoveToPending(parseInt(btn.dataset.movePending));
  });
}

function renderHistory() {
  const list = $('#historyList');
  if (!list) return;
  
  if (state.historyItems.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📊</div><p>${t('noHistory')}</p></div>`;
    return;
  }
  
  list.innerHTML = '';
  
  const sortedItems = [...state.historyItems].sort((a, b) => b.decidedAt - a.decidedAt);
  
  sortedItems.forEach(item => {
    const category = getCategoryById(item.categoryId);
    const color = getDecisionColor(item.hours, item.categoryId);
    const statusText = item.status === 'bought' ? t('bought') : t('skipped');
    const statusColor = item.status === 'bought' ? 'var(--green)' : 'var(--red)';
    const date = new Date(item.decidedAt).toLocaleDateString(state.language === 'he' ? 'he-IL' : 'en-US');
    
    const itemEl = document.createElement('div');
    itemEl.className = 'list-item';
    itemEl.innerHTML = `
      <div class="list-item-header">
        <div class="list-item-title">
          <span style="font-size: 1.5rem;">${category.icon}</span>
          <h3>${item.name}</h3>
        </div>
        <button class="btn-icon" data-delete-history="${item.id}" title="${t('delete')}">🗑️</button>
      </div>
      <div class="list-item-meta">
        <div style="display: flex; gap: 16px; margin-bottom: 8px;">
          <span>💰 ${item.price}${t('currency')}</span>
          <span class="result-hours ${color}" style="font-size: 1rem;">${item.hours.toFixed(1)} ${t('hours')}</span>
        </div>
        <div style="display: flex; gap: 16px; font-size: 0.875rem;">
          <span style="color: ${statusColor}; font-weight: 600;">${statusText}</span>
          <span>📅 ${date}</span>
        </div>
      </div>
    `;
    
    list.appendChild(itemEl);
  });
  
  $$('[data-delete-history]').forEach(btn => {
    btn.onclick = () => handleDeleteHistoryItem(parseInt(btn.dataset.deleteHistory));
  });
  
  updateHistoryStats();
}

function updateHistoryStats() {
  const statsCard = $('#historyStats');
  if (!statsCard || state.historyItems.length === 0) return;
  
  const bought = state.historyItems.filter(i => i.status === 'bought');
  const skipped = state.historyItems.filter(i => i.status === 'skipped');
  const totalHours = bought.reduce((sum, i) => sum + i.hours, 0);
  
  statsCard.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
      <div>
        <div class="stats-value" style="color: var(--green);">${bought.length}</div>
        <div class="stats-label">${t('boughtCount')}</div>
      </div>
      <div>
        <div class="stats-value" style="color: var(--red);">${skipped.length}</div>
        <div class="stats-label">${t('skippedCount')}</div>
      </div>
      <div>
        <div class="stats-value" style="color: var(--primary);">${totalHours.toFixed(0)}</div>
        <div class="stats-label">${t('hoursSpent')}</div>
      </div>
    </div>
  `;
  
  statsCard.classList.remove('hidden');
}

function render() {
  renderCategoryGrid();
  renderWageSelect();
  renderWageProfiles();
  renderPendingList();
  renderWishlist();
  renderHistory();
  updateStaticText();
}

// ====== MODAL FUNCTIONS ======

function toggleWageTypeFields() {
  const wageType = $('#wageTypeSelect')?.value;
  const hourlyGroup = $('#hourlyWageGroup');
  const monthlyGroup = $('#monthlyWageGroup');
  const hoursGroup = $('#monthlyHoursGroup');
  
  if (wageType === 'monthly') {
    hourlyGroup?.classList.add('hidden');
    monthlyGroup?.classList.remove('hidden');
    hoursGroup?.classList.remove('hidden');
  } else {
    hourlyGroup?.classList.remove('hidden');
    monthlyGroup?.classList.add('hidden');
    hoursGroup?.classList.add('hidden');
  }
}

function openEditModal(profileId) {
  const modal = $('#wageProfileModal');
  const title = $('#wageProfileModalTitle');
  const nameInput = $('#profileNameInput');
  const wageTypeSelect = $('#wageTypeSelect');
  const hourlyInput = $('#hourlyWageInput');
  const monthlyInput = $('#monthlyWageInput');
  const hoursInput = $('#monthlyHoursInput');
  const grossInput = $('#isGrossInput');
  const saveBtn = modal?.querySelector('#saveProfileBtn');
  const cancelBtn = modal?.querySelector('.close-modal');
  
  if (!modal) return;
  
  editingProfileId = profileId;
  const profile = state.wageProfiles.find(p => p.id === profileId);
  
  if (profile) {
    title.textContent = t('editProfile');
    nameInput.value = profile.name;
    nameInput.placeholder = t('profilePlaceholder');
    
    wageTypeSelect.innerHTML = `
      <option value="hourly">${t('hourlyWage')}</option>
      <option value="monthly">${t('monthlyWage')}</option>
    `;
    wageTypeSelect.value = profile.wageType || 'hourly';
    
    hourlyInput.value = profile.hourlyWage || 60;
    monthlyInput.value = profile.monthlyWage || 12000;
    hoursInput.value = profile.monthlyHours || 186;
    grossInput.checked = profile.isGross || false;
    
    nameInput.previousElementSibling.textContent = t('profileName');
    wageTypeSelect.previousElementSibling.textContent = t('wageType');
    hourlyInput.previousElementSibling.textContent = t('hourlyWageLabel') + ` (${t('currency')})`;
    monthlyInput.previousElementSibling.textContent = t('monthlyWageLabel') + ` (${t('currency')})`;
    hoursInput.previousElementSibling.textContent = t('hoursPerMonth');
    
    if (saveBtn) saveBtn.textContent = t('save');
    if (cancelBtn) cancelBtn.textContent = t('cancel');
    
    toggleWageTypeFields();
  }
  
  modal.classList.remove('hidden');
  setTimeout(() => nameInput.focus(), 100);
}

function openNewModal() {
  const modal = $('#wageProfileModal');
  const title = $('#wageProfileModalTitle');
  const nameInput = $('#profileNameInput');
  const wageTypeSelect = $('#wageTypeSelect');
  const hourlyInput = $('#hourlyWageInput');
  const monthlyInput = $('#monthlyWageInput');
  const hoursInput = $('#monthlyHoursInput');
  const grossInput = $('#isGrossInput');
  const saveBtn = modal?.querySelector('#saveProfileBtn');
  const cancelBtn = modal?.querySelector('.close-modal');
  
  if (!modal) return;
  
  editingProfileId = null;
  title.textContent = t('newProfile');
  nameInput.value = '';
  nameInput.placeholder = t('profilePlaceholder');
  
  wageTypeSelect.innerHTML = `
    <option value="hourly">${t('hourlyWage')}</option>
    <option value="monthly">${t('monthlyWage')}</option>
  `;
  wageTypeSelect.value = 'hourly';
  
  hourlyInput.value = '60';
  monthlyInput.value = '';
  hoursInput.value = '186';
  grossInput.checked = false;
  
  nameInput.previousElementSibling.textContent = t('profileName');
  wageTypeSelect.previousElementSibling.textContent = t('wageType');
  hourlyInput.previousElementSibling.textContent = t('hourlyWageLabel') + ` (${t('currency')})`;
  monthlyInput.previousElementSibling.textContent = t('monthlyWageLabel') + ` (${t('currency')})`;
  hoursInput.previousElementSibling.textContent = t('hoursPerMonth');
  
  if (saveBtn) saveBtn.textContent = t('save');
  if (cancelBtn) cancelBtn.textContent = t('cancel');
  
  toggleWageTypeFields();
  modal.classList.remove('hidden');
  setTimeout(() => nameInput.focus(), 100);
}

function handleSaveProfile() {
  const nameInput = $('#profileNameInput');
  const wageTypeSelect = $('#wageTypeSelect');
  const hourlyInput = $('#hourlyWageInput');
  const monthlyInput = $('#monthlyWageInput');
  const hoursInput = $('#monthlyHoursInput');
  const grossInput = $('#isGrossInput');
  const modal = $('#wageProfileModal');
  
  const name = nameInput.value.trim();
  const wageType = wageTypeSelect.value;
  const hourlyWage = parseFloat(hourlyInput.value) || 60;
  const monthlyWage = parseFloat(monthlyInput.value) || 12000;
  const monthlyHours = parseInt(hoursInput.value) || 186;
  const isGross = grossInput.checked;
  
  if (!name) {
    alert(t('fillName'));
    return;
  }
  
  if (wageType === 'hourly' && (!hourlyWage || hourlyWage <= 0)) {
    alert(t('fillHourlyWage'));
    return;
  }
  
  if (wageType === 'monthly' && (!monthlyWage || monthlyWage <= 0)) {
    alert(t('fillMonthlyWage'));
    return;
  }
  
  if (editingProfileId !== null) {
    const profile = state.wageProfiles.find(p => p.id === editingProfileId);
    if (profile) {
      profile.name = name;
      profile.wageType = wageType;
      profile.hourlyWage = hourlyWage;
      profile.monthlyWage = monthlyWage;
      profile.monthlyHours = monthlyHours;
      profile.isGross = isGross;
    }
  } else {
    const newProfile = {
      id: Date.now(),
      name,
      wageType,
      hourlyWage,
      monthlyWage,
      monthlyHours,
      isGross
    };
    state.wageProfiles.push(newProfile);
    state.selectedProfile = newProfile.id;
  }
  
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ 
      wageProfiles: state.wageProfiles,
      selectedProfile: state.selectedProfile
    });
  }
  
  modal.classList.add('hidden');
  render();
  announce(t('profileSaved'));
}

function handleDeleteProfile(profileId) {
  if (state.wageProfiles.length === 1) {
    alert(t('mustKeepOne'));
    return;
  }
  
  const profile = state.wageProfiles.find(p => p.id === profileId);
  if (!profile || !confirm(`${t('deleteProfileConfirm')} "${profile.name}"?`)) return;
  
  state.wageProfiles = state.wageProfiles.filter(p => p.id !== profileId);
  
  if (state.selectedProfile === profileId) {
    state.selectedProfile = state.wageProfiles[0].id;
  }
  
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ 
      wageProfiles: state.wageProfiles,
      selectedProfile: state.selectedProfile
    });
  }
  
  render();
  announce(t('profileDeleted'));
}

// ====== CALCULATOR ======

function calculate() {
  const priceInput = $('#priceInput');
  if (!priceInput) return;
  
  const price = parseFloat(priceInput.value);
  const profile = state.wageProfiles.find(p => p.id === state.selectedProfile);
  
  if (!price || price <= 0 || isNaN(price)) {
    alert(t('fillPrice'));
    return;
  }
  
  if (!profile) {
    console.error('No wage profile found!');
    return;
  }
  
  const hourlyWage = getEffectiveHourlyWage(profile);
  const hours = price / hourlyWage;
  
  if (isNaN(hours) || !isFinite(hours)) {
    console.error('Invalid calculation result', { price, hourlyWage, hours });
    alert('Calculation error. Please check your wage profile settings.');
    return;
  }
  
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
      resultCat.innerHTML = `<span style="font-size:2rem">${category.icon}</span> ${t('categories.' + category.id)}`;
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
  
  announce(`${hours.toFixed(1)} ${t('hours')}`);
}

// ====== WAIT TIMER & WISHLIST FUNCTIONS ======

function openNameModal(waitHours) {
  pendingWaitHours = waitHours;
  const modal = $('#nameModal');
  const input = $('#itemNameInput');
  const title = modal?.querySelector('h2');
  const saveBtn = modal?.querySelector('#saveItemBtn');
  const cancelBtn = modal?.querySelector('.close-modal');
  
  if (modal && input) {
    if (title) title.textContent = t('itemName');
    input.placeholder = t('itemPlaceholder');
    input.value = '';
    if (saveBtn) saveBtn.textContent = t('save');
    if (cancelBtn) cancelBtn.textContent = t('cancel');
    modal.classList.remove('hidden');
    setTimeout(() => input.focus(), 100);
  }
}

function handleSaveItem() {
  const input = $('#itemNameInput');
  const modal = $('#nameModal');
  
  if (!input || !state.currentItem) return;
  
  const itemName = input.value.trim();
  if (!itemName) {
    alert(t('fillItemName'));
    return;
  }
  
  const item = {
    id: Date.now(),
    name: itemName,
    price: state.currentItem.price,
    hours: state.currentItem.hours,
    categoryId: state.currentItem.categoryId,
    profileId: state.currentItem.profileId,
    createdAt: Date.now()
  };
  
  if (pendingWaitHours !== null) {
    const waitUntil = Date.now() + (pendingWaitHours * 60 * 60 * 1000);
    item.waitUntil = waitUntil;
    item.status = 'pending';
    
    state.pendingItems.push(item);
    
    if (typeof chrome !== 'undefined' && chrome.runtime) {
      chrome.runtime.sendMessage({
        action: 'setPendingAlarm',
        itemId: item.id,
        waitUntil: waitUntil
      });
    }
    
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set({ pendingItems: state.pendingItems });
    }
    
    announce(t('addedToPending'));
    switchScreen('pending');
    
  } else {
    item.status = 'wishlist';
    state.wishlistItems.push(item);
    
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set({ wishlistItems: state.wishlistItems });
    }
    
    announce(t('addedToWishlist'));
    switchScreen('wishlist');
  }
  
  modal.classList.add('hidden');
  pendingWaitHours = null;
  render();
}

function addToWishlist() {
  if (!state.currentItem) return;
  openNameModal(null);
}

// ====== ITEM MANAGEMENT FUNCTIONS ======

function handleDeletePendingItem(itemId) {
  if (!confirm(t('deleteConfirm'))) return;
  
  state.pendingItems = state.pendingItems.filter(i => i.id !== itemId);
  
  if (typeof chrome !== 'undefined' && chrome.alarms) {
    chrome.alarms.clear(`pending-item-${itemId}`);
  }
  
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ pendingItems: state.pendingItems });
  }
  
  render();
  announce(t('itemDeleted'));
}

function handleBuyItem(itemId) {
  const item = state.pendingItems.find(i => i.id === itemId);
  if (!item) return;
  
  item.status = 'bought';
  item.decidedAt = Date.now();
  state.historyItems.push(item);
  
  state.pendingItems = state.pendingItems.filter(i => i.id !== itemId);
  
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ 
      pendingItems: state.pendingItems,
      historyItems: state.historyItems
    });
  }
  
  render();
  announce(t('markedAsBought'));
}

function handleSkipItem(itemId) {
  const item = state.pendingItems.find(i => i.id === itemId);
  if (!item) return;
  
  item.status = 'skipped';
  item.decidedAt = Date.now();
  state.historyItems.push(item);
  
  state.pendingItems = state.pendingItems.filter(i => i.id !== itemId);
  
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ 
      pendingItems: state.pendingItems,
      historyItems: state.historyItems
    });
  }
  
  render();
  announce(t('markedAsSkipped'));
}

function handleDeleteWishlistItem(itemId) {
  if (!confirm(t('deleteConfirm'))) return;
  
  state.wishlistItems = state.wishlistItems.filter(i => i.id !== itemId);
  
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ wishlistItems: state.wishlistItems });
  }
  
  render();
  announce(t('itemDeleted'));
}

function handleMoveToPending(itemId) {
  const item = state.wishlistItems.find(i => i.id === itemId);
  if (!item) return;
  
  const hours = prompt(t('askWaitTime'), '24');
  if (!hours) return;
  
  const waitHours = parseInt(hours);
  if (isNaN(waitHours) || waitHours <= 0) {
    alert(t('invalidHours'));
    return;
  }
  
  const waitUntil = Date.now() + (waitHours * 60 * 60 * 1000);
  item.waitUntil = waitUntil;
  item.status = 'pending';
  
  state.wishlistItems = state.wishlistItems.filter(i => i.id !== itemId);
  state.pendingItems.push(item);
  
  if (typeof chrome !== 'undefined' && chrome.runtime) {
    chrome.runtime.sendMessage({
      action: 'setPendingAlarm',
      itemId: item.id,
      waitUntil: waitUntil
    });
  }
  
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ 
      pendingItems: state.pendingItems,
      wishlistItems: state.wishlistItems
    });
  }
  
  render();
  announce(t('movedToPending'));
}

function handleDeleteHistoryItem(itemId) {
  if (!confirm(t('deleteConfirm'))) return;
  
  state.historyItems = state.historyItems.filter(i => i.id !== itemId);
  
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ historyItems: state.historyItems });
  }
  
  render();
  announce(t('itemDeleted'));
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
  
  $$('.nav-tab').forEach(tab => {
    tab.onclick = (e) => switchScreen(e.currentTarget.dataset.screen);
  });
  
  document.addEventListener('click', (e) => {
    const catBtn = e.target.closest('.category-btn');
    if (catBtn) {
      state.selectedCategory = catBtn.dataset.category;
      renderCategoryGrid();
    }
  });
  
  const wageSelect = $('#wageSelect');
  if (wageSelect) {
    wageSelect.onchange = (e) => {
      state.selectedProfile = parseInt(e.target.value);
    };
  }
  
  const calcBtn = $('#calculateBtn');
  if (calcBtn) {
    calcBtn.onclick = calculate;
  }
  
  const priceInput = $('#priceInput');
  if (priceInput) {
    priceInput.onkeypress = (e) => {
      if (e.key === 'Enter') calculate();
    };
  }
  
  const darkBtn = $('#darkModeBtn');
  if (darkBtn) {
    darkBtn.onclick = () => {
      state.darkMode = !state.darkMode;
      document.body.classList.toggle('dark-mode');
      darkBtn.textContent = state.darkMode ? '☀️' : '🌙';
      
      if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.local.set({ darkMode: state.darkMode });
      }
    };
  }
  
  const toolbar = $('.toolbar');
  if (toolbar && !$('#langBtn')) {
    const langBtn = document.createElement('button');
    langBtn.id = 'langBtn';
    langBtn.className = 'icon-btn';
    langBtn.setAttribute('aria-label', 'Switch Language');
    langBtn.setAttribute('title', 'Switch Language');
    langBtn.textContent = state.language === 'en' ? '🇺🇸' : '🇮🇱';
    langBtn.onclick = () => {
      const newLang = state.language === 'en' ? 'he' : 'en';
      setLanguage(newLang);
      langBtn.textContent = newLang === 'en' ? '🇺🇸' : '🇮🇱';
    };
    toolbar.insertBefore(langBtn, darkBtn);
  }
  
  const settingsBtn = $('#settingsBtn');
  const settingsPanel = $('#settingsPanel');
  const closeSettings = $('#closeSettings');
  
  if (settingsBtn && settingsPanel) {
    settingsBtn.onclick = () => settingsPanel.classList.toggle('hidden');
  }
  if (closeSettings) {
    closeSettings.onclick = () => settingsPanel.classList.add('hidden');
  }
  
  const addProfileBtn = $('#addWageProfileBtn');
  if (addProfileBtn) {
    addProfileBtn.onclick = openNewModal;
  }
  
  const saveProfileBtn = $('#saveProfileBtn');
  if (saveProfileBtn) {
    saveProfileBtn.onclick = handleSaveProfile;
  }
  
  const wageTypeSelect = $('#wageTypeSelect');
  if (wageTypeSelect) {
    wageTypeSelect.onchange = toggleWageTypeFields;
  }
  
  $$('.result-actions button[data-wait]').forEach(btn => {
    btn.onclick = () => {
      const hours = parseInt(btn.dataset.wait);
      openNameModal(hours);
    };
  });
  
  const addToWishlistBtn = $('#addToWishlistBtn');
  if (addToWishlistBtn) {
    addToWishlistBtn.onclick = addToWishlist;
  }
  
  const saveItemBtn = $('#saveItemBtn');
  if (saveItemBtn) {
    saveItemBtn.onclick = handleSaveItem;
  }
  
  const itemNameInput = $('#itemNameInput');
  if (itemNameInput) {
    itemNameInput.onkeypress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSaveItem();
      }
    };
  }
  
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
}

// ====== INIT ======

function init() {
  console.log('🚀 Initializing...');
  
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.get([
      'wageProfiles', 
      'selectedProfile', 
      'darkMode',
      'pendingItems',
      'wishlistItems',
      'historyItems',
      'language'
    ], (result) => {
      if (result.language) {
        state.language = result.language;
        document.documentElement.lang = result.language;
        document.documentElement.dir = result.language === 'he' ? 'rtl' : 'ltr';
        document.body.style.textAlign = result.language === 'he' ? 'right' : 'left';
      }
      
      if (result.wageProfiles && result.wageProfiles.length > 0) {
        state.wageProfiles = result.wageProfiles;
      }
      
      if (result.selectedProfile) {
        state.selectedProfile = result.selectedProfile;
      } else {
        state.selectedProfile = state.wageProfiles[0].id;
      }
      
      if (result.darkMode) {
        state.darkMode = result.darkMode;
        document.body.classList.toggle('dark-mode', result.darkMode);
        const darkBtn = $('#darkModeBtn');
        if (darkBtn) darkBtn.textContent = result.darkMode ? '☀️' : '🌙';
      }
      if (result.pendingItems) {
        state.pendingItems = result.pendingItems;
      }
      if (result.wishlistItems) {
        state.wishlistItems = result.wishlistItems;
      }
      if (result.historyItems) {
        state.historyItems = result.historyItems;
      }
      
      console.log('✅ State loaded:', {
        profiles: state.wageProfiles.length,
        selectedProfile: state.selectedProfile,
        language: state.language
      });
      
      render();
      
      setInterval(() => {
        if ($('#pendingScreen')?.classList.contains('active')) {
          renderPendingList();
        }
      }, 60000);
    });
  } else {
    render();
  }
  
  initEvents();
  
  console.log('✅ Ready!');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

console.log('✅ Script loaded!');