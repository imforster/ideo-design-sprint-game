# Session Persistence Feature

## Overview
The collaborative mode now supports session persistence, allowing users to rejoin sessions after refreshing the page or closing their browser.

## How It Works

### Automatic Session Restoration
When a user refreshes the page:
1. The app checks `localStorage` for a saved session
2. If found, it verifies the session still exists in Supabase
3. Automatically reconnects the user to the session
4. Syncs all game state (phase, ideas, prototype, etc.)

### Session Storage
The following data is stored in `localStorage`:
- `sessionId`: The unique session identifier
- `isHost`: Whether the user is the host
- `userName`: The user's display name
- `participantId`: The user's unique participant ID

### Leaving a Session
Users can leave a session at any time using the "Leave Session" button:
- **Location**: Visible in the game header during all phases (Empathize, Ideate, Select, Prototype, Iterate)
- **Confirmation**: Shows prompt before leaving to prevent accidents
- **Different warnings**: Hosts vs participants see different messages
- **Host warning**: Leaving ends session for all participants
- **Participant option**: Can rejoin using session code
- **Action**: Removes participant from session, clears local storage, returns to intro

## User Experience Improvements

### Visual Indicators
- Current user is highlighted with a ring around their name badge
- "(You)" label shows which participant is the current user
- Copy button for easy session code sharing

### Session Management
- **Create Session**: Generates a new session and saves to localStorage
- **Join Session**: Joins existing session and saves to localStorage
- **Leave Session**: Cleanly exits and clears saved data
- **Auto-Restore**: Seamlessly reconnects on page refresh

## Technical Details

### localStorage Keys
- `ideoGameSession`: JSON object containing session data

### Session Validation
On restore, the app:
1. Checks if the session exists in Supabase
2. Verifies the session data is valid
3. Clears localStorage if session is no longer available

### Error Handling
- Gracefully handles missing or invalid sessions
- Clears corrupted localStorage data
- Provides user feedback for connection issues

## Security Considerations

### What's Stored Locally
- Session IDs (UUIDs) - not sensitive
- User names - user-provided display names
- Participant IDs - random UUIDs

### What's NOT Stored
- No Supabase credentials
- No sensitive user data
- No authentication tokens

### Session Cleanup
- Sessions expire after 24 hours (database-level)
- Users can manually leave sessions
- Invalid sessions are automatically cleared from localStorage

## Usage Tips

### For Hosts
1. Create a session with your name
2. Session code displayed in game header with copy button
3. Click copy button to share code with participants
4. See participant count update in real-time
5. You can refresh without losing your session
6. **Warning**: Leaving as host ends the session for everyone

### For Participants
1. Enter your name and the session code
2. Join the session
3. You can refresh and automatically rejoin
4. Use "Leave Session" when done (you'll be asked to confirm)
5. You can rejoin anytime using the same session code

### Troubleshooting
- **Can't rejoin after refresh**: Session may have expired (24 hours)
- **Session not found**: Host may have left or session was deleted
- **Duplicate participants**: Clear browser cache and rejoin
- **Host can't start game after refresh**: Fixed - gameMode is now properly restored
- **Score not updating correctly**: Fixed - score is now properly synced and restored

## Bug Fixes

### Score Synchronization (v1.1)
- **Issue**: Score was not restored on page refresh
- **Fix**: Added `collaborativeScore` to session restore logic
- **Issue**: Score was being incremented twice in ideate phase for collaborative mode
- **Fix**: Moved score increment inside the else block for non-collaborative mode
- **Result**: Score now accurately reflects progress and persists across refreshes

## Collaborative Features

### Real-Time Text Editing (v1.2)

For HMW Statement (Phase 0) and Prototype Description (Phase 3), team members can now:

**See What Others Are Typing**
- Text updates in real-time as team members type
- "X is typing..." indicator shows who's currently editing
- 300ms debounce prevents excessive database writes

**Collaborative Editing**
- All team members see the same draft text
- Anyone can edit and contribute
- Anyone can submit when ready
- Draft text persists across page refreshes

**Visual Feedback**
- Typing indicator shows active contributor
- Helper text explains collaborative editing
- Draft text syncs automatically

**Technical Implementation**
- Debounced updates (300ms) to reduce database load
- Real-time sync via Supabase subscriptions
- Draft state separate from submitted state
- Automatic cleanup on submission

## Future Enhancements
- Session expiry warnings
- Reconnection notifications
- Offline mode support
- Session history
