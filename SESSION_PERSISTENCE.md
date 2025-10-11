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
Users can now explicitly leave a session using the "Leave Session" button:
- Removes the participant from the session
- Clears local storage
- Returns to the intro screen

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
2. Share the session code with participants
3. Use the copy button for easy sharing
4. You can refresh without losing your session

### For Participants
1. Enter your name and the session code
2. Join the session
3. You can refresh and automatically rejoin
4. Use "Leave Session" when done

### Troubleshooting
- **Can't rejoin after refresh**: Session may have expired (24 hours)
- **Session not found**: Host may have left or session was deleted
- **Duplicate participants**: Clear browser cache and rejoin
- **Host can't start game after refresh**: Fixed - gameMode is now properly restored

## Future Enhancements
- Session expiry warnings
- Reconnection notifications
- Offline mode support
- Session history
