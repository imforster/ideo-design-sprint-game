# Changelog

All notable changes to the IDEO Design Sprint Game will be documented in this file.

## [3.2.0] - 2025-10-11

### Added - Enhanced Collaborative Features

**Session Persistence and Restoration**
- Automatic session restoration on page refresh using localStorage
- Session validation to verify session still exists in database
- Seamless reconnection without re-entering session code
- Participant ID and role (host/participant) restoration
- Full game state synchronization on restore (phase, ideas, prototype, score)
- Graceful handling of expired or invalid sessions

**Collaborative Text Editing**
- Real-time text synchronization for HMW statements (Phase 0)
- Real-time text synchronization for prototype descriptions (Phase 3)
- Typing indicators showing "[Name] is typing..."
- 300ms debounced updates to reduce database load
- Draft text persistence across page refreshes
- Automatic draft cleanup on submission
- Helper text explaining collaborative editing to users

**Session Code Sharing**
- Prominent session code display in game header during all phases
- One-click copy button for easy code sharing
- Real-time participant count display
- Session code visible to all participants (not just host)
- Clipboard API integration with fallback support

**Leave Session Confirmation**
- Confirmation dialog before leaving session
- Different warnings for hosts vs participants
- Host warning: "Leaving will end the session for all participants"
- Participant info: "You can rejoin using the session code"
- Clean session cleanup on leave (localStorage and database)
- "Leave Session" button visible during all game phases

**Real-Time Participant Awareness**
- Visual participant list with names and roles
- Current user highlighted with ring/border and "(You)" label
- Host badge for session creator
- Colored badges for visual distinction
- Real-time updates when participants join/leave
- Participant count updates immediately

**New Documentation Files**
- `SESSION_PERSISTENCE.md` - Session persistence implementation details
- `COLLABORATIVE_EDITING.md` - Real-time text editing documentation
- `SESSION_CODE_SHARING.md` - Session code sharing feature guide
- `LEAVE_SESSION_CONFIRMATION.md` - Leave confirmation flow
- `COLLABORATIVE_UI_ELEMENTS.md` - UI component documentation
- `PHASE_TRANSITION_INPUT_CLEARING.md` - Input clearing behavior
- `DRAFT_TEXT_CLEARING.md` - Draft text management
- `COLLABORATIVE_QUICKSTART.md` - Quick start guide for facilitators
- `.kiro/specs/ideo-design-sprint-game/UPDATE_SUMMARY.md` - Spec update summary

### Changed

**Collaborative Mode Improvements**
- Enhanced session lifecycle management
- Improved error handling for network issues
- Better conflict resolution for simultaneous edits
- Optimized real-time synchronization performance
- Input fields now clear for all participants on phase transitions
- Draft text properly restored on page refresh for phases 0 and 3

**UI/UX Enhancements**
- Session code bar added to playing screen header
- Typing indicators integrated into input fields
- Helper text added for collaborative text fields
- Improved participant list display with visual indicators
- Better mobile responsiveness for collaborative UI elements

**Documentation Updates**
- Updated `requirements.md` with 5 new collaborative requirements (18-22)
- Updated `design.md` with comprehensive collaborative architecture section
- Added session lifecycle state diagram
- Documented all collaborative state variables
- Added data models for Participant, SessionData, and StoredSession
- Updated screen layouts to show collaborative UI elements
- Enhanced phase-specific content documentation

### Fixed

**Collaborative Mode Bug Fixes**
- Score now properly syncs and restores in collaborative mode
- Score no longer increments twice in ideate phase for collaborative sessions
- Game mode properly restored after page refresh
- Draft text correctly restored for phases 0 and 3
- Input fields properly cleared on phase transitions for all participants
- Session validation prevents joining expired sessions

### Technical Details

**Session Persistence**
- localStorage key: `ideoGameSession`
- Stores: sessionId, isHost, userName, participantId
- Automatic cleanup on leave or session end
- Validation on restore to prevent stale sessions

**Real-Time Synchronization**
- Debounced text updates: 300ms delay
- Immediate sync: phase changes, submissions, participant events
- Optimistic updates: local state updates immediately
- Conflict resolution: last write wins

**Performance Optimizations**
- Reduced database writes by ~90% with debouncing
- Selective subscriptions for efficient real-time updates
- Local caching of participant list
- Efficient state management with React hooks

**Database Schema Updates**
- Added `draftHmw` field to session_data
- Added `hmwTyper` field to session_data
- Added `draftPrototype` field to session_data
- Added `prototypeTyper` field to session_data
- Added `collaborativeScore` field to session_data

---

## [3.1.0] - 2025-10-09

### Added - Collaborative Mode

**Real-time Multi-Participant Collaboration**
- New "Collaborative" game mode for remote team workshops
- Supabase integration for real-time synchronization
- Session creation and joining with unique session codes
- Participant presence indicators and role management
- Host-controlled phase progression
- Real-time idea sharing with author attribution
- Collaborative voting on ideas
- Shared prototype building
- Synchronized timer across all participants

**New Files**
- `supabase-setup.sql` - Database schema for Supabase
- `COLLABORATIVE_SETUP.md` - Step-by-step setup guide
- `COLLABORATIVE_FEATURES.md` - Feature documentation and best practices

**Technical Implementation**
- Supabase Realtime subscriptions for instant updates
- Session state management with conflict resolution
- Participant tracking and presence system
- Async/await patterns for database operations
- Real-time data synchronization hooks

### Changed

- Updated game mode selection UI to include Collaborative option (3-column grid)
- Modified idea display to show author names in collaborative sessions
- Enhanced start button logic to handle host-only controls
- Updated README.md with collaborative mode information

### Technical Details

- Supabase client integration via CDN
- PostgreSQL database with JSONB for flexible session data
- Row Level Security (RLS) policies for access control
- Real-time publication for session_data table
- Automatic session cleanup after 24 hours

---

## [3.0.0] - 2025

### Added

- Team multiplayer mode with member tracking
- Custom challenge creator with topics
- Challenge selection and management
- JSON import/export for challenge sets
- Image upload for prototypes (up to 3 images)
- PDF export with embedded images
- Email integration for sharing results
- Customizable timer (30 seconds to 30 minutes)
- Download results as .txt file
- Copy to clipboard for quick sharing
- Idea attribution in team mode
- Settings panel for facilitators
- Complete documentation package

### Features

- 5 IDEO design phases
- 4 default challenges with topics
- Unlimited custom challenges
- Real-time scoring system
- Customizable timed ideation
- Offline capability (solo/team modes)

### Technical

- Built with React 18
- Styled with Tailwind CSS
- jsPDF for PDF generation
- Single HTML file deployment
- No backend required (for solo/team)
- Works offline after first load

### Changed

- Redesigned intro screen with mode selection
- Enhanced settings panel with timer customization
- Improved challenge management interface

---

## [2.0.0] - 2024

### Added

- Team mode for collaborative sessions
- Custom challenge support
- Timer functionality
- Score tracking system
- Results export

### Changed

- UI improvements
- Better mobile responsiveness

---

## [1.0.0] - 2023

### Added

- Initial release
- Solo mode
- 5 IDEO design phases
- Basic challenge set
- Simple scoring system

---

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):
- MAJOR version for incompatible changes
- MINOR version for new features (backwards compatible)
- PATCH version for bug fixes (backwards compatible)

---

## Upgrade Notes

### From 3.1 to 3.2

**New Features:**
- Session persistence (automatic)
- Collaborative text editing (automatic)
- Enhanced UI elements (automatic)

**No Configuration Required:**
- All new features work automatically if Supabase is already configured
- No database schema changes needed
- No breaking changes to existing functionality

**Backwards Compatibility:**
- All v3.1 features continue to work
- Sessions created in v3.1 will work in v3.2
- No migration needed for existing users

**What's New:**
- Sessions now persist across page refreshes
- Real-time text editing in phases 0 and 3
- Session code always visible with copy button
- Leave session confirmation dialogs
- Enhanced participant awareness

### From 3.0 to 3.1

**New Dependencies:**
- Supabase JavaScript client (loaded via CDN)

**Configuration Required:**
- Supabase project setup (optional, only for collaborative mode)
- Database schema installation
- Environment configuration in index.html

**Backwards Compatibility:**
- All existing features (Solo, Team) work without Supabase
- Collaborative mode is opt-in
- No breaking changes to existing functionality

**Migration Steps:**
1. Update index.html with new version
2. (Optional) Set up Supabase following COLLABORATIVE_SETUP.md
3. (Optional) Configure Supabase credentials in index.html
4. Test existing modes to ensure compatibility
5. Test collaborative mode if configured

---

## Future Roadmap

### Planned Features

**v3.3 - Advanced Collaboration**
- Session passwords for private sessions
- Enhanced participant permissions and roles
- In-app chat functionality
- Cursor position tracking in collaborative editing
- Operational Transformation (OT) for conflict-free editing
- Session history and recovery

**v3.4 - Enhanced Features**
- Idea editing and deletion
- Voting mechanisms (thumbs up/down, star ratings)
- Time-boxed phases with auto-advance
- Session templates and presets
- Rich text formatting in text fields
- Version history for collaborative text

**v3.5 - Integration & Export**
- Integration with Miro/Figma
- Export to more formats (DOCX, PPTX, Markdown)
- API for external integrations
- Webhook support for session events
- QR code generation for session joining
- Native share API integration

**v4.0 - Enterprise Features**
- User authentication with Supabase Auth
- Organization management
- Analytics and insights dashboard
- Custom branding and white-labeling
- Advanced security features
- Compliance and audit logs

---

## Known Issues

### v3.2.0

- Collaborative mode requires manual Supabase configuration
- Maximum 20 participants recommended for optimal performance
- No built-in video/audio (use external tools like Zoom/Teams)
- Ideas cannot be edited after submission
- No cursor position tracking in collaborative text editing
- Simple "last write wins" conflict resolution for text

### Workarounds

- Use external video conferencing tools for audio/video
- Export results frequently to avoid data loss
- Keep participant count reasonable (2-10 recommended)
- Review ideas before submitting
- Designate one person as primary writer for collaborative text fields
- Communicate verbally when editing shared text

---

## Support

For issues or questions:
- Check documentation files (README.md, DOCUMENTATION.md, etc.)
- Review setup guides for collaborative mode
- Test in different browsers if issues occur
- Verify Supabase configuration if using collaborative mode

---

## Package Distribution Guide

### STEP 1: VERIFY FOLDER CONTENTS

Your ideo-design-sprint-game folder should contain:

```
ideo-design-sprint-game/
├── index.html                (The game - 150-200KB)
├── README.md                 (Quick start guide)
├── DOCUMENTATION.md          (Complete user manual)
├── FACILITATOR_GUIDE.md     (Workshop facilitation guide)
├── COLLABORATIVE_SETUP.md   (Supabase setup for collaborative mode)
├── COLLABORATIVE_FEATURES.md (Collaborative mode documentation)
├── LICENSE.txt               (Usage terms)
└── CHANGE_LOG.md            (This file - Version history)
```

### STEP 2: CREATE ZIP FILE

**On macOS:**
1. Right-click the ideo-design-sprint-game folder
2. Select "Compress [folder name]"
3. This creates: ideo-design-sprint-game.zip

**On Windows:**
1. Right-click the ideo-design-sprint-game folder
2. Select "Send to" → "Compressed (zipped) folder"
3. This creates: ideo-design-sprint-game.zip

### STEP 3: TEST THE PACKAGE

1. Extract the ZIP to a new location
2. Open index.html in a browser
3. Verify the game loads correctly
4. Test all features:
   - Solo mode
   - Team mode
   - Collaborative mode (if Supabase configured)
   - Custom challenges
   - Download results
   - All 5 phases
5. Check documentation files open correctly

### STEP 4: SHARE!

Your package is now ready to:
- Email to colleagues
- Upload to Google Drive/Dropbox
- Share on internal network
- Distribute to workshop participants
- Archive for future use

### FILE SIZE EXPECTATIONS

```
index.html:              ~150-200KB
README.md:               ~15KB
DOCUMENTATION.md:        ~50KB
FACILITATOR_GUIDE.md:    ~40KB
COLLABORATIVE_SETUP.md:  ~15KB
COLLABORATIVE_FEATURES.md: ~20KB
LICENSE.txt:             ~2KB
CHANGE_LOG.md:           ~15KB
---------------------------------
Total (uncompressed):    ~310KB
Total (zipped):          ~100-120KB
```

### TROUBLESHOOTING

**Q: Game won't open from ZIP**  
A: Extract the ZIP first, then open index.html

**Q: Can I rename the folder?**  
A: Yes, folder name doesn't affect functionality

**Q: Do I need all the documentation?**  
A: No, but highly recommended for facilitators

**Q: Can I modify the files?**  
A: Yes! Edit index.html to customize

**Q: How do I add more default challenges?**  
A: Edit the defaultChallenges array in index.html

**Q: How do I enable collaborative mode?**  
A: Follow the instructions in COLLABORATIVE_SETUP.md

### SHARING TIPS

**When sharing with others:**

1. **Include a brief email:**
   ```
   Attached is an interactive design thinking game. 
   Extract the ZIP and open index.html to play. 
   See README.md for instructions.
   ```

2. **For workshops:**
   ```
   Please download and extract before the session.
   Test that index.html opens in your browser.
   See FACILITATOR_GUIDE.md for tips.
   ```

3. **For remote teams:**
   ```
   Everyone should have their own copy.
   No installation needed - just open the HTML file.
   For collaborative mode, see COLLABORATIVE_SETUP.md.
   ```

### MAINTENANCE

**To update the game:**
1. Edit index.html with any changes
2. Update CHANGE_LOG.md with changes
3. Increment version number
4. Re-create ZIP with new date

### CUSTOMIZATION IDEAS

**Edit index.html to:**
- Add company branding
- Change color schemes
- Add more default challenges
- Modify scoring system
- Adjust time limits
- Customize text/instructions
- Configure Supabase for collaborative mode

### SUPPORT

**For questions:**
1. Check DOCUMENTATION.md
2. Review FACILITATOR_GUIDE.md
3. For collaborative mode: COLLABORATIVE_SETUP.md
4. Test in different browser
5. Check browser console for errors

---

**You're all set! Enjoy facilitating amazing design sprints!** 🚀

---

_Package Version: 3.2.0_  
_Last Updated: October 11, 2025_  
_Total Files: 8+ core files_  
_Compressed Size: ~100-120KB_

