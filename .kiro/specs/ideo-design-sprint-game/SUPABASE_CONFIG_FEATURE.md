# Supabase Configuration in Settings - Feature Specification

## Overview

This feature allows users to configure Supabase credentials through the settings UI instead of editing code files. Configuration stored in localStorage takes priority over config.js, making it easy for facilitators to enable collaborative mode without technical knowledge.

## User Story

**As a facilitator**, I want to configure Supabase credentials through the settings UI and have them stored locally, so that I can enable collaborative mode without editing code files.

## Benefits

### For Non-Technical Users
- ✅ No need to edit HTML or JavaScript files
- ✅ Simple form-based configuration
- ✅ Test connection before saving
- ✅ Clear status indicators
- ✅ Easy to update or clear

### For Technical Users
- ✅ Can still use config.js for default configuration
- ✅ localStorage overrides for per-user customization
- ✅ Easy to switch between different Supabase projects
- ✅ No need to distribute config.js with credentials

### For Teams
- ✅ Each team member can configure their own credentials
- ✅ Facilitators can use different Supabase projects
- ✅ Easy to share the game without sharing credentials
- ✅ Supports multiple environments (dev, staging, prod)

## Configuration Priority

The system checks for configuration in this order:

1. **localStorage** (highest priority)
   - User-configured via settings UI
   - Stored in browser
   - Persists across sessions
   - Can be cleared via settings

2. **config.js** (fallback)
   - Developer-configured
   - Committed to repository (or not)
   - Shared across all users of that file
   - Used when no localStorage config exists

3. **No configuration** (disabled)
   - Collaborative mode unavailable
   - Warning displayed in settings
   - Error shown when trying to use collaborative mode

## UI Components

### Configuration Section in Settings Modal

```
┌─────────────────────────────────────────────────────┐
│ Collaborative Mode Configuration                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Status: ✓ Configured via Settings (localStorage)   │
│                                                     │
│ Supabase URL:                                       │
│ ┌─────────────────────────────────────────────┐   │
│ │ https://xxxxx.supabase.co                   │   │
│ └─────────────────────────────────────────────┘   │
│                                                     │
│ Supabase Anon Key:                                  │
│ ┌─────────────────────────────────────────────┐   │
│ │ ••••••••••••••••••••••••••••••••••••••  [👁] │   │
│ └─────────────────────────────────────────────┘   │
│                                                     │
│ [Test Connection] [Save Configuration]              │
│ [Clear Configuration]                               │
│                                                     │
│ 📖 Need help? See COLLABORATIVE_SETUP.md           │
└─────────────────────────────────────────────────────┘
```

### Status Indicators

**Configured via localStorage:**
```
✓ Configured via Settings (localStorage)
[Green indicator]
```

**Configured via config.js:**
```
✓ Configured via config.js
[Blue indicator]
```

**Not configured:**
```
⚠ Not configured - Collaborative mode unavailable
[Yellow indicator]
```

## Implementation Details

### localStorage Schema

```json
{
  "supabaseUrl": "https://xxxxx.supabase.co",
  "supabaseAnonKey": "eyJhbGc..."
}
```

**Key:** `supabaseConfig`

### State Variables

```typescript
// Configuration inputs
supabaseUrl: string
supabaseAnonKey: string
showSupabaseKey: boolean  // Toggle for password visibility

// Configuration status
configSource: 'localStorage' | 'config.js' | 'none'

// Test connection
isTestingConnection: boolean
connectionTestResult: 'success' | 'error' | null
```

### Key Functions

**1. initializeSupabase()**
- Checks localStorage first
- Falls back to config.js
- Returns Supabase client or null
- Sets configSource state

**2. saveConfiguration()**
- Validates URL format
- Validates Anon Key format
- Saves to localStorage
- Reinitializes Supabase client
- Shows success message

**3. testConnection()**
- Creates temporary client
- Attempts to query sessions table
- Shows loading state
- Displays success or error

**4. clearConfiguration()**
- Shows confirmation dialog
- Removes from localStorage
- Clears input fields
- Reinitializes (reverts to config.js)

**5. loadCurrentConfiguration()**
- Loads from localStorage if exists
- Shows config.js values as placeholders
- Populates input fields

## Validation Rules

### Supabase URL
- Must be a valid URL
- Should match pattern: `https://*.supabase.co`
- Required field

### Supabase Anon Key
- Should start with "eyJ" (JWT format)
- Required field
- Minimum length check

## User Flows

### First Time Setup

```
1. User opens settings
   ↓
2. Sees "Not configured" status
   ↓
3. Enters Supabase URL
   ↓
4. Enters Supabase Anon Key
   ↓
5. Clicks "Test Connection"
   ↓
6. Sees "Connection successful!"
   ↓
7. Clicks "Save Configuration"
   ↓
8. Sees "Configuration saved!"
   ↓
9. Collaborative mode now available
```

### Updating Configuration

```
1. User opens settings
   ↓
2. Sees current configuration
   ↓
3. Modifies URL or Key
   ↓
4. Tests connection (optional)
   ↓
5. Saves configuration
   ↓
6. New configuration takes effect
```

### Clearing Configuration

```
1. User opens settings
   ↓
2. Clicks "Clear Configuration"
   ↓
3. Confirms in dialog
   ↓
4. Configuration removed from localStorage
   ↓
5. Reverts to config.js (if available)
   ↓
6. Or shows "Not configured"
```

## Error Handling

### Invalid URL Format
```
❌ Invalid Supabase URL format
Please enter a valid URL like: https://xxxxx.supabase.co
```

### Invalid Key Format
```
❌ Invalid Anon Key format
The key should start with "eyJ"
```

### Connection Test Failed
```
❌ Connection failed: [error message]
Please check your credentials and try again.
```

### localStorage Quota Exceeded
```
❌ Unable to save configuration
Your browser storage is full. Please clear some data.
```

### Corrupted Data
```
⚠ Corrupted configuration detected
Configuration has been cleared. Please re-enter your credentials.
```

## Security Considerations

### Anon Key is Public
- Supabase anon keys are designed to be public
- Row Level Security (RLS) handles actual security
- Still masked in UI to prevent shoulder surfing
- No encryption needed for localStorage

### No Sensitive Data
- Only storing public credentials
- No user passwords or personal data
- Safe to store in localStorage

### Clear Instructions
- Documentation explains what these credentials are
- Links to Supabase setup guide
- Explains security model

## Testing Checklist

- [ ] Save configuration to localStorage
- [ ] Load configuration from localStorage on app start
- [ ] localStorage overrides config.js
- [ ] config.js used when no localStorage config
- [ ] Clear configuration removes from localStorage
- [ ] Test connection with valid credentials succeeds
- [ ] Test connection with invalid credentials fails
- [ ] URL validation works correctly
- [ ] Key validation works correctly
- [ ] Show/hide key toggle works
- [ ] Status indicator shows correct source
- [ ] Collaborative mode enables when configured
- [ ] Collaborative mode disables when not configured
- [ ] Error messages display correctly
- [ ] Success messages display correctly
- [ ] Configuration persists across page refreshes
- [ ] Multiple users can have different configs (different browsers)

## Documentation Updates

### Files to Update

1. **COLLABORATIVE_SETUP.md**
   - Add section about settings UI option
   - Explain it's easier than editing code
   - Show screenshots of settings UI

2. **README.md**
   - Mention configuration options
   - Link to settings UI instructions

3. **DOCUMENTATION.md**
   - Add "Configuring Collaborative Mode" section
   - Step-by-step instructions with screenshots

4. **FACILITATOR_GUIDE.md**
   - Add section on setting up for workshops
   - Explain priority system
   - Troubleshooting tips

## Future Enhancements

### Possible Improvements

1. **Multiple Profiles**
   - Save multiple Supabase configurations
   - Switch between dev/staging/prod
   - Name each profile

2. **Import/Export Config**
   - Export configuration as JSON
   - Import configuration from file
   - Share configs with team

3. **Auto-Detect**
   - Detect Supabase URL from session code
   - Suggest configuration based on common patterns

4. **Validation Improvements**
   - Check if URL is reachable
   - Verify key has correct permissions
   - Test specific table access

5. **Configuration Wizard**
   - Step-by-step setup guide
   - Integrated with first-time experience
   - Auto-test after each step

## Related Requirements

- **Requirement 23**: Supabase Configuration in Settings
- **Requirement 18**: Collaborative Session Management
- **Requirement 19**: Session Persistence and Restoration

## Related Documentation

- `COLLABORATIVE_SETUP.md` - Supabase setup guide
- `COLLABORATIVE_FEATURES.md` - Collaborative mode features
- `COLLABORATIVE_QUICKSTART.md` - Quick start guide

---

**Feature Status:** Specified, ready for implementation  
**Priority:** High (improves user experience significantly)  
**Complexity:** Medium  
**Estimated Effort:** 4-6 hours
