# Changelog

All notable changes to the IDEO Design Sprint Game will be documented in this file.

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

**v3.2 - Enhanced Collaboration**
- Session passwords for private sessions
- Participant permissions and roles
- In-app chat functionality
- Session history and recovery

**v3.3 - Advanced Features**
- Idea editing and deletion
- Voting mechanisms (thumbs up/down)
- Time-boxed phases with auto-advance
- Session templates

**v3.4 - Integration & Export**
- Integration with Miro/Figma
- Export to more formats (DOCX, PPTX)
- API for external integrations
- Webhook support

**v4.0 - Enterprise Features**
- User authentication
- Organization management
- Analytics and insights
- Custom branding

---

## Known Issues

### v3.1.0

- Collaborative mode requires manual Supabase configuration
- No session recovery if browser is closed
- Maximum 20 participants recommended
- No built-in video/audio (use external tools)
- Ideas cannot be edited after submission

### Workarounds

- Use external video conferencing tools
- Export results frequently
- Keep participant count reasonable
- Review ideas before submitting

---

## Support

For issues or questions:
- Check documentation files (README.md, DOCUMENTATION.md, etc.)
- Review setup guides for collaborative mode
- Test in different browsers if issues occur
- Verify Supabase configuration if using collaborative mode

---

_Last Updated: October 9, 2025_
