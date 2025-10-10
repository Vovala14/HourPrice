# How Many Work Hours? | כמה שעות עבודה? 💰⏰

**A smart Chrome extension that helps you make mindful purchasing decisions by converting prices into work hours.**

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Download-blue?logo=google-chrome)](https://chromewebstore.google.com/detail/כמה-שעות-עבודה/fjjbjjipegofibokldobgfifbjipgkmp)
![Version](https://img.shields.io/badge/version-1.1.0-blue)
![Manifest](https://img.shields.io/badge/manifest-v3-green)
![Languages](https://img.shields.io/badge/languages-English%20%7C%20Hebrew-orange)

**[📥 Install from Chrome Web Store](https://chromewebstore.google.com/detail/כמה-שעות-עבודה/fjjbjjipegofibokldobgfifbjipgkmp)** | **[🌐 Visit KoalaJump.com](https://koalajump.com)**

-----

## 🎯 Overview

Ever wondered if that purchase is really worth it? This extension answers the question: **“How many hours do I need to work to afford this?”**

By translating prices into work hours, you gain a clearer perspective on the true cost of your purchases, helping you make more conscious spending decisions.

-----

## ✨ Key Features

### 💡 Smart Calculator

- **Instant conversion** from price to work hours
- Support for both **hourly** and **monthly** wages
- **Gross/Net wage calculator** - automatic tax deduction estimation
- **Category-based thresholds** (9 categories with custom decision rules)
- **Color-coded recommendations**:
  - 🟢 Green: Worth buying
  - 🟠 Amber: Worth considering
  - 🔴 Red: Probably skip

### ⏰ Wait Timer System

- **24/48/72-hour timers** to prevent impulse buying
- Live countdown for pending items
- Browser notifications when decision time arrives
- Visual indicators for expired timers

### 📝 Lists & Organization

- **Pending Items**: Items with active wait timers
- **Wishlist**: Save items for later consideration (no timer)
- **History**: Track all your decisions (bought vs. skipped)
- Real-time statistics and insights

### 🌍 Bilingual Support

- **Full English & Hebrew support**
- One-click language switching (🇺🇸 ⇄ 🇮🇱)
- Complete RTL/LTR layout adaptation
- Currency auto-switching ($ ⇄ ₪)

### 🎨 Accessibility & Customization

- **Dark Mode** with complete theme support
- **Font size options**: Small, Normal, Large
- **High contrast mode** for better readability
- **Keyboard shortcuts** for power users
- **Screen reader friendly** with ARIA labels

### 💼 Multiple Wage Profiles

- Create unlimited wage profiles
- Support for main job + side gigs
- Easy switching between profiles
- Edit/delete profiles anytime

-----

## 🚀 Installation

### From Chrome Web Store (Recommended)

**👉 [Install Now from Chrome Web Store](https://chromewebstore.google.com/detail/כמה-שעות-עבודה/fjjbjjipegofibokldobgfifbjipgkmp)**

1. Click the link above
1. Click **“Add to Chrome”**
1. Confirm the installation
1. Done! Icon appears in your toolbar

### From Source (For Development)

1. **Download or Clone** this repository
   
   ```bash
   git clone https://github.com/yourusername/work-hours-calculator.git
   ```
1. **Open Chrome Extensions Page**
- Navigate to `chrome://extensions`
- Enable **Developer mode** (top right)
1. **Load the Extension**
- Click **“Load unpacked”**
- Select the extension folder
1. **Done!** The extension icon should appear in your toolbar

### File Structure

```
work-hours-calculator/
├── manifest.json          # Extension configuration
├── popup.html            # Main UI structure
├── popup.js              # Core logic & i18n
├── styles.css            # Styling & themes
├── background.js         # Service worker (alarms, notifications)
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md            # Documentation
```

-----

## 📖 Usage Guide

### Basic Workflow

1. **Set Up Your Wage Profile**
- Click the ⚙️ Settings button
- Add your wage (hourly or monthly)
- Choose if it’s gross (before tax) or net
- Save your profile
1. **Calculate a Purchase**
- Select a category (🛒 General, 👕 Clothes, etc.)
- Enter the price
- Click **Calculate**
- See instant results with color-coded recommendation
1. **Make a Decision**
- **Buy Immediately**: Skip the timer
- **Wait 24/48/72 Hours**: Let it cool off
- **Save to Wishlist**: Consider later without timer
1. **Review Your History**
- See all past decisions
- Track how many items bought vs. skipped
- View total work hours spent

-----

## 🎨 Categories

Each category has customized thresholds:

|Category     |Icon|Green (≤)|Amber (≤)|Description          |
|-------------|----|---------|---------|---------------------|
|General      |🛒   |2h       |6h       |Everyday items       |
|Furniture    |🛋️   |4h       |12h      |Home furnishings     |
|Clothes      |👕   |2h       |5h       |Apparel & accessories|
|Entertainment|🎮   |1.5h     |4h       |Games, movies, fun   |
|Electronics  |📱   |3h       |8h       |Gadgets & tech       |
|Food         |🍕   |1h       |3h       |Dining & groceries   |
|Health       |💊   |3h       |7h       |Medical & wellness   |
|Education    |📚   |5h       |15h      |Courses & learning   |
|Travel       |✈️   |8h       |20h      |Trips & experiences  |

*Thresholds are customizable in future versions*

-----

## ⌨️ Keyboard Shortcuts

|Shortcut |Action             |
|---------|-------------------|
|`Alt + 1`|Calculator tab     |
|`Alt + 2`|Pending items      |
|`Alt + 3`|Wishlist           |
|`Alt + 4`|History            |
|`Alt + S`|Settings           |
|`Alt + D`|Toggle Dark Mode   |
|`Alt + H`|Keyboard Help      |
|`Esc`    |Close modals/panels|

-----

## 🔧 Technical Details

### Technologies Used

- **Manifest V3** (latest Chrome extension standard)
- **Vanilla JavaScript** (no frameworks - fast & lightweight)
- **CSS3** with CSS Variables for theming
- **Chrome Storage API** for data persistence
- **Chrome Alarms API** for wait timers
- **Chrome Notifications API** for reminders

### Browser Compatibility

- ✅ **Chrome** 88+ (Manifest V3 required)
- ✅ **Edge** 88+ (Chromium-based)
- ✅ **Brave** (Chromium-based)
- ❌ Firefox (requires Manifest V2 adaptation)

### Data Storage

All data is stored **locally** using Chrome’s Storage API:

- Wage profiles
- Pending items with timers
- Wishlist items
- Purchase history
- User preferences (language, theme, etc.)

**Privacy**: No data is sent to any server. Everything stays on your device.

-----

## 🧮 Wage Calculations

### Hourly Wage

```javascript
hours = price / hourlyWage
```

### Monthly Wage → Hourly

```javascript
effectiveHourlyWage = monthlyWage / monthlyHours
hours = price / effectiveHourlyWage
```

### Gross → Net Conversion

Simplified progressive tax estimation (adjustable in code):

```javascript
// Monthly wage brackets (example)
if (gross ≤ 6790₪)  → net = gross × 0.90  (~10% deductions)
if (gross ≤ 9730₪)  → net = gross × 0.83  (~17% average)
if (gross ≤ 15620₪) → net = gross × 0.77  (~23% average)
if (gross ≤ 21710₪) → net = gross × 0.72  (~28% average)
else                → net = gross × 0.68  (~32% average)
```

*Note: These are simplified estimations. Adjust for your country’s tax system.*

-----

## 🌐 Internationalization (i18n)

### Supported Languages

- 🇺🇸 **English** (Default)
- 🇮🇱 **עברית (Hebrew)**

### How It Works

- All UI text defined in `translations` object
- One-click language switching
- Automatic RTL/LTR layout switch
- Currency symbol adaptation ($ ⇄ ₪)
- Date formatting per locale

### Adding New Languages

Edit the `translations` object in `popup.js`:

```javascript
const translations = {
  en: { /* English translations */ },
  he: { /* Hebrew translations */ },
  // Add your language:
  es: { 
    title: '¿Cuántas Horas de Trabajo?',
    calculate: 'Calcular',
    // ... etc
  }
};
```

-----

## 🎨 Customization

### Themes

The extension includes **3 built-in themes**:

1. **Light Mode** (default)
1. **Dark Mode** (toggle with 🌙 button)
1. **High Contrast Mode** (in Settings)

### CSS Variables

Customize colors by editing `styles.css`:

```css
:root {
  --bg-primary: #F7F9FC;
  --bg-secondary: #ffffff;
  --text-primary: #1e293b;
  --primary: #2563EB;
  --green: #10B981;
  --amber: #F59E0B;
  --red: #EF4444;
}
```

-----

## 📊 Features Breakdown

### Core Calculation Engine

- ✅ Price to hours converter
- ✅ Hourly wage support
- ✅ Monthly wage support
- ✅ Gross/Net calculation
- ✅ Multiple wage profiles
- ✅ Category-based thresholds
- ✅ Color-coded decisions

### Timer System

- ✅ 24/48/72-hour wait timers
- ✅ Custom timer durations
- ✅ Live countdown display
- ✅ Browser notifications
- ✅ Expired timer alerts
- ✅ Alarm persistence

### Organization

- ✅ Pending items list
- ✅ Wishlist (no timer)
- ✅ History tracking
- ✅ Statistics dashboard
- ✅ Search & filter (coming soon)

### UX/UI

- ✅ Full bilingual support
- ✅ RTL/LTR layouts
- ✅ Dark mode
- ✅ High contrast mode
- ✅ Font size options
- ✅ Keyboard shortcuts
- ✅ Screen reader support
- ✅ Responsive design

-----

## 🔮 Roadmap

### Version 1.2 (Planned)

- [ ] Export data to CSV
- [ ] Import wage profiles
- [ ] Custom category creation
- [ ] Editable thresholds per category
- [ ] Charts & visualizations

### Version 1.3 (Planned)

- [ ] Browser integration (auto-detect prices on pages)
- [ ] Multi-currency support
- [ ] Budget tracking
- [ ] Monthly spending reports
- [ ] Goal setting (e.g., “Save 10 work hours this month”)

### Future Considerations

- [ ] Mobile app version
- [ ] Sync across devices
- [ ] Shared family profiles
- [ ] AI-powered recommendations
- [ ] Integration with banking apps

-----

## 🐛 Known Issues

- None currently! 🎉

*Found a bug? Please [open an issue](https://github.com/yourusername/work-hours-calculator/issues)*

-----

## 🤝 Contributing

Contributions are welcome! Here’s how you can help:

1. **Fork** the repository
1. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
1. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
1. **Push** to the branch (`git push origin feature/AmazingFeature`)
1. **Open** a Pull Request

### Development Guidelines

- Follow existing code style
- Add comments for complex logic
- Test in both English and Hebrew
- Ensure dark mode compatibility
- Keep accessibility in mind

-----

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

-----

## 💖 Acknowledgments

- Inspired by the concept of translating money into time for better decision-making
- Built with accessibility and user experience as top priorities
- Thanks to the open-source community for tools and inspiration
- Created by [KoalaJump](https://koalajump.com)

-----

## 📞 Support

- **Chrome Web Store**: [Install Extension](https://chromewebstore.google.com/detail/כמה-שעות-עבודה/fjjbjjipegofibokldobgfifbjipgkmp)
- **Website**: [koalajump.com](https://koalajump.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/work-hours-calculator/issues)

-----

## 🌟 Star This Project

If you find this extension helpful, please consider giving it a ⭐ on GitHub!

-----

**Made with ❤️ by [KoalaJump](https://koalajump.com) for mindful spending**

**[📥 Get the Extension](https://chromewebstore.google.com/detail/כמה-שעות-עבודה/fjjbjjipegofibokldobgfifbjipgkmp)** • **[🌐 Visit Our Website](https://koalajump.com)**

*Last Updated: October 2025*