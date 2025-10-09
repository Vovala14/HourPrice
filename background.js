// Service Worker for Chrome Extension - Manifest V3
// Updated with Monthly Wage & Gross/Net support

// Handle alarms for pending items
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name.startsWith('pending-item-')) {
    const itemId = parseInt(alarm.name.replace('pending-item-', ''));
    
    chrome.storage.local.get(['pendingItems'], (result) => {
      const item = result.pendingItems?.find(i => i.id === itemId);
      
      if (item) {
        chrome.notifications.create(`notify-${itemId}`, {
          type: 'basic',
          iconUrl: 'icons/icon128.png',
          title: 'הגיע הזמן להחליט! ⏰',
          message: `זמן ההמתנה עבור "${item.name}" הסתיים.\nהאם לקנות את הפריט?`,
          priority: 2,
          requireInteraction: true
        });
      }
    });
  }
});

// Handle notification clicks
chrome.notifications.onClicked.addListener((notificationId) => {
  chrome.action.openPopup?.();
  chrome.notifications.clear(notificationId);
});

// Set alarm when receiving message from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'setPendingAlarm') {
    const alarmName = `pending-item-${request.itemId}`;
    
    chrome.alarms.clear(alarmName, () => {
      chrome.alarms.create(alarmName, {
        when: request.waitUntil
      });
      
      console.log(`⏰ Alarm set for item ${request.itemId} at ${new Date(request.waitUntil).toLocaleString('he-IL')}`);
    });
    
    sendResponse({ success: true });
  }
  
  return true;
});

// Install/Update event - UPDATED DEFAULT DATA
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('🎉 תוסף "כמה שעות עבודה?" הותקן בהצלחה!');
    
    // Set default values with new wage profile structure
    chrome.storage.local.set({
      darkMode: false,
      highContrast: false,
      fontSize: 'normal',
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
        { 
          id: 1, 
          name: 'עבודה ראשית', 
          type: 'hourly',    // 'hourly' or 'monthly'
          amount: 60,        // The wage amount
          isGross: false,    // Whether this is gross (before tax) or net
          monthlyHours: 186  // Hours per month (only used for monthly type)
        }
      ],
      selectedProfile: 1,
      pendingItems: [],
      wishlistItems: [],
      historyItems: []
    });
    
  } else if (details.reason === 'update') {
    console.log('🔄 התוסף עודכן לגרסה החדשה');
    
    // Migration: Update old wage profiles to new structure
    chrome.storage.local.get(['wageProfiles'], (result) => {
      if (result.wageProfiles) {
        const updated = result.wageProfiles.map(profile => {
          // If profile doesn't have new fields, add them with defaults
          if (!profile.type) {
            return {
              ...profile,
              type: 'hourly',
              amount: profile.hourlyWage || profile.amount || 60,
              isGross: profile.isGross || false,
              monthlyHours: profile.monthlyHours || 186
            };
          }
          return profile;
        });
        
        chrome.storage.local.set({ wageProfiles: updated });
        console.log('✅ Migrated wage profiles to new structure');
      }
    });
  }
});

// Keep service worker alive (optional, for debugging)
chrome.runtime.onStartup.addListener(() => {
  console.log('🚀 Service Worker started');
});