# IDEO Design Sprint Game - Complete Package

## 📦 Package Contents

This package contains everything you need to run the IDEO Design Sprint Game on your MacBook or share it with others.

---

## 📁 File Structure

```
ideo-design-sprint-game/
├── README.md                 (This file - Getting Started Guide)
├── index.html               (Main game file - open this to play)
├── DOCUMENTATION.md         (Complete user guide)
├── FACILITATOR_GUIDE.md    (Guide for workshop facilitators)
├── LICENSE.txt              (Usage terms)
└── CHANGELOG.md             (Version history)
```

---

## 🚀 Quick Start (3 Steps)

### 1. Extract the ZIP File

- Double-click `ideo-design-sprint-game.zip`
- Extract to your desired location (Desktop, Documents, etc.)

### 2. Open the Game

- Navigate to the extracted folder
- **Double-click `index.html`**
- The game opens in your default browser

### 3. Start Playing!

- Choose **Solo Mode** or **Team Mode**
- Follow the on-screen instructions
- Complete all 5 design phases

**That's it! No installation, no setup, no internet required (after first load).**

---

## 🎮 Game Modes

### Solo Mode

Perfect for:

- Personal practice
- Learning design thinking
- Portfolio projects
- Quick ideation sessions

### Team Mode

Ideal for:

- Workshop facilitation
- Collaborative brainstorming
- Team building activities
- In-person team sessions

### Collaborative Mode (NEW!)

Real-time collaboration for:

- Remote team workshops
- Distributed design sprints
- Multi-location sessions
- Asynchronous participation

**Configuration Options:**

- **Settings UI** (Recommended): Configure directly in the app via Settings → Collaborative Mode Configuration
- **config.js File**: Create a config file for persistent configuration
- **Priority**: Settings UI (localStorage) overrides config.js

**Note**: Collaborative mode requires Supabase setup. See `COLLABORATIVE_SETUP.md` for detailed instructions.

---

## 💡 Key Features

✅ **Two Play Modes** - Solo and Team collaboration  
✅ **5 IDEO Phases** - Empathize, Ideate, Select, Prototype, Iterate  
✅ **Custom Challenges** - Add your own design problems with topics  
✅ **Challenge Selection** - Enable/disable specific challenges  
✅ **Challenge Import/Export** - Share challenge sets via JSON  
✅ **Image Upload** - Add sketches and visuals to prototypes  
✅ **PDF Export** - Professional formatted reports with images  
✅ **Email Integration** - Send results directly from the app  
✅ **Download Results** - Export complete sprint reports  
✅ **Share Results** - Copy summaries to clipboard  
✅ **Customizable Timer** - Adjust ideation duration (30s-30min)  
✅ **Score Tracking** - Gamified points system  
✅ **Offline Ready** - Works without internet

---

## 📖 Documentation Files

### README.md (This File)

Quick start guide and overview

### DOCUMENTATION.md

- Complete user manual
- How to use each feature
- Tips for best results
- Troubleshooting guide

### FACILITATOR_GUIDE.md

- Running workshops
- Team setup best practices
- Custom challenge creation
- Exporting and sharing results
- Remote facilitation tips

---

## 🎯 Use Cases

### Education

- Teaching design thinking methodology
- Interactive classroom activities
- Student project ideation

### Business

- Product brainstorming sessions
- Innovation workshops
- Team alignment exercises
- Customer problem-solving

### Workshops

- Design sprint facilitation
- Creative problem-solving
- Stakeholder engagement
- Remote team collaboration

---

## 🖥️ Technical Requirements

**Operating System:**

- macOS (any recent version)
- Also works on Windows, Linux

**Browser:** Any modern browser

- Safari (recommended for Mac)
- Chrome
- Firefox
- Edge

**Internet:**

- Required: First load only (downloads React & Tailwind)
- After first load: Works 100% offline

**Storage:**

- Minimal: ~500KB for HTML file
- No installation required

---

## 🔧 Customization

### Supabase Configuration (Collaborative Mode)

**Option 1: Settings UI (Easiest)**

1. Click Settings icon (⚙️) on intro screen
2. Scroll to "Collaborative Mode Configuration"
3. Enter your Supabase URL and Anon Key
4. Click "Test Connection" to verify
5. Click "Save Configuration" to store locally

**Option 2: config.js File**

1. Create `config.js` in the same folder as `index.html`
2. Add your Supabase credentials:

```javascript
window.SUPABASE_CONFIG = {
  url: "https://xxxxx.supabase.co",
  anonKey: "eyJhbGc...",
};
```

3. Save and refresh the page

**Configuration Priority:**

- localStorage (Settings UI) takes priority over config.js
- This allows default config in file with individual overrides

**See COLLABORATIVE_SETUP.md for complete setup instructions.**

### Challenge Management

**Add Custom Challenges:**

1. Click Settings icon (⚙️) on intro screen
2. Click "Add Challenge"
3. Fill in title, description, persona, pain point, and topic
4. Save and use immediately

**Challenge Topics:**

- Education, Business, Healthcare, Technology
- Sustainability, Social Impact, Product Design, Service Design
- Or create your own custom topic

**Enable/Disable Challenges:**

1. Open Settings
2. Go to Challenge Selection section
3. Check/uncheck challenges to enable/disable
4. Only enabled challenges will appear in sprints

**Import/Export Challenges:**

- Export: Download your custom challenges as JSON
- Import: Load challenge sets from JSON files
- Share challenge packs with colleagues

### Timer Customization

**Adjust Ideation Timer:**

1. Open Settings
2. Go to Timer Settings section
3. Choose preset (1, 3, 5, or 10 minutes)
4. Or enter custom duration (30 seconds to 30 minutes)
5. Timer applies to all sprints in current session

### Advanced Customization

Edit `index.html` directly for deeper changes:

**Add Default Challenges:**
Find the `defaultChallenges` array and add:

```javascript
{
    title: "Your Challenge Title",
    description: "Problem description",
    persona: "User persona details",
    painPoint: "Main pain point",
    topic: "Your Topic"
}
```

**Change Colors/Styling:**
All styling uses Tailwind CSS classes. Modify class names to change appearance.

---

## 📤 Sharing the Game

### With Colleagues

1. Email them the entire folder (or just `index.html`)
2. They open `index.html` in any browser
3. No setup needed on their end

### With Teams

1. Share via Dropbox, Google Drive, or file share
2. Everyone opens the same file locally
3. Each person runs independently or screen share for collaboration

### For Workshops

1. Project `index.html` on screen
2. Facilitate together as a group
3. Download results at end of session

---

## 💾 Saving Your Work

### During Sprint

- Custom challenges: Active during session
- Progress: Saved in current game state
- Ideas: All captured in real-time

### After Sprint

- **Download Results**: Click download button for .txt file
- **Copy to Clipboard**: Quick summary for sharing
- **Screenshot**: Capture final results screen

**Note:** Custom challenges reset when you close the browser. Download your sprint results before closing!

---

## 🆘 Troubleshooting

### Game Won't Open

- **Solution**: Right-click → Open With → Chrome/Safari
- **Mac Security**: System Preferences → Security → Allow

### Blank White Screen

- **Solution**: Check internet connection on first load
- **Alternative**: Use Chrome if Safari has issues

### Download Button Not Working

- **Solution**: Check browser download permissions
- **Alternative**: Copy to clipboard instead

### Custom Challenges Disappeared

- **Expected**: They reset each session
- **Solution**: Export challenges via Settings before closing

### Collaborative Mode Not Available

- **Check**: Settings → Collaborative Mode Configuration
- **Status**: Look for configuration status indicator
- **Solution**: Enter Supabase credentials or check config.js
- **Test**: Use "Test Connection" button to verify credentials

### Configuration Not Saving

- **Check**: Browser localStorage is enabled
- **Solution**: Not in private/incognito mode
- **Alternative**: Use config.js file instead

---

## 📜 IDEO Principles Embedded

The game teaches these core IDEO principles:

1. **Defer Judgment** - All ideas welcome during ideation
2. **Build on Ideas** - Collaborative thinking encouraged
3. **Go for Quantity** - Volume over perfection
4. **Stay Focused** - Clear challenges and constraints
5. **Be Visual** - Clean, intuitive interface
6. **Encourage Wild Ideas** - No idea too crazy
7. **One Conversation at a Time** - Structured phases

---

## 📊 Scoring System

- **HMW Statement**: 20 points
- **Each Idea**: 5 points
- **Selecting Top 3**: 20 points
- **Prototype**: 30 points
- **Iteration Notes**: 25 points
- **Bonus**: Speed and creativity

**Maximum Score: 100+ points**

---

## 🎓 Learning Outcomes

After completing a sprint, users will:

✓ Understand the design thinking process  
✓ Practice empathetic problem framing  
✓ Generate diverse solution ideas  
✓ Evaluate ideas systematically  
✓ Create rapid prototypes  
✓ Iterate based on feedback  
✓ Document their design process

---

## 🔄 Version Information

**Current Version:** 3.0  
**Release Date:** 2025  
**Last Updated:** See CHANGELOG.md

### What's New in v3.0

- Team multiplayer mode
- Custom challenge creator with topics
- Challenge selection and management
- JSON import/export for challenge sets
- Image upload for prototypes (up to 3 images)
- PDF export with embedded images
- Email integration for sharing results
- Customizable timer (30 seconds to 30 minutes)
- Download/share results in multiple formats
- Improved UI/UX
- Better mobile support

---

## 📞 Support & Feedback

### Questions?

- Check DOCUMENTATION.md for detailed guides
- Review FACILITATOR_GUIDE.md for workshop tips

### Found a Bug?

- Note browser and OS version
- Describe the issue
- Try a different browser

### Suggestions?

- Document your idea
- Share with your team
- Consider customizing the code

---

## 🙏 Credits

**Inspired by:** IDEO Design Thinking Methodology  
**Built with:** React, Tailwind CSS  
**Icons:** Lucide React (inline SVG)

---

## 📝 License

See LICENSE.txt for usage terms.

**Summary:**

- ✅ Free to use for education and workshops
- ✅ Modify and customize as needed
- ✅ Share with colleagues and students
- ❌ Do not resell as-is
- ❌ Credit IDEO methodology when sharing

---

## 🎉 Ready to Start?

1. **Close this file**
2. **Open `index.html`**
3. **Choose your mode**
4. **Start your design sprint!**

For detailed instructions, see **DOCUMENTATION.md**  
For workshop facilitation, see **FACILITATOR_GUIDE.md**

---

**Happy Designing! 🚀**

---

## Quick Links

- [User Documentation](DOCUMENTATION.md)
- [Facilitator Guide](FACILITATOR_GUIDE.md)
- [Change Log](CHANGELOG.md)
- [License](LICENSE.txt)

---

_Last Updated: October 2025_
_Package Version: 3.0_
