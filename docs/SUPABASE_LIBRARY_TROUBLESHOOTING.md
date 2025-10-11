# Supabase Library Troubleshooting Guide

## Issue: "Supabase client library not loaded" Error

If you see this error when testing the connection, follow these troubleshooting steps:

### Step 1: Check Browser Console

1. Open the browser's Developer Tools (F12 or Right-click → Inspect)
2. Go to the Console tab
3. Look for any errors related to loading scripts
4. Check if you see: `Supabase library loaded successfully`

### Step 2: Verify Script Loading

1. In Developer Tools, go to the Network tab
2. Refresh the page
3. Look for: `supabase-js@2` in the list of loaded resources
4. Check if it loaded successfully (Status: 200)
5. If it shows an error (e.g., 404, timeout), there's a network issue

### Step 3: Check Internet Connection

The Supabase library is loaded from a CDN, so you need internet access:

1. Verify you're connected to the internet
2. Try accessing: https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2
3. If it doesn't load, check your firewall or proxy settings

### Step 4: Try Refreshing the Page

Sometimes the library loads after React initializes:

1. Refresh the page (Ctrl+R or Cmd+R)
2. Wait a few seconds for all scripts to load
3. Try the test connection again

### Step 5: Check Browser Compatibility

Ensure you're using a modern browser:

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Step 6: Clear Browser Cache

Cached scripts might be corrupted:

1. Open Developer Tools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"
4. Try again

### Step 7: Check for Content Blockers

Ad blockers or privacy extensions might block CDN scripts:

1. Temporarily disable browser extensions
2. Try in an incognito/private window
3. If it works, re-enable extensions one by one to find the culprit

### Step 8: Use Test File

Use the included test file to verify library loading:

1. Open `test-supabase-library.html` in your browser
2. Check if it shows "✅ window.supabase is defined"
3. If not, there's an issue with the CDN or your network

### Step 9: Alternative CDN

If the default CDN is blocked, you can try an alternative:

Edit `index.html` and replace:
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

With:
```html
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
```

### Step 10: Local Installation (Advanced)

For offline use or if CDN is blocked:

1. Download the Supabase library from: https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2
2. Save it as `supabase.js` in the same folder as `index.html`
3. Update the script tag in `index.html`:
```html
<script src="supabase.js"></script>
```

## Common Causes

### 1. Network Issues
- No internet connection
- Firewall blocking CDN
- Corporate proxy blocking external scripts
- DNS issues

### 2. Browser Issues
- Outdated browser version
- Corrupted cache
- Extensions blocking scripts
- Privacy settings too strict

### 3. Timing Issues
- Scripts loading in wrong order
- React initializing before Supabase loads
- Page loaded from cache

### 4. Configuration Issues
- Script tag missing or incorrect
- Wrong CDN URL
- Script tag in wrong location

## Verification Steps

After fixing the issue, verify it works:

1. Open Settings in the app
2. Go to Collaborative Mode Configuration
3. Enter test credentials:
   - URL: `https://test.supabase.co`
   - Key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.test`
4. Click "Test Connection"
5. You should see an error about connection (not about library)
6. This confirms the library is loaded

## Still Having Issues?

If none of the above steps work:

1. Check the browser console for specific error messages
2. Note your browser version and operating system
3. Try a different browser
4. Try a different computer/device
5. Check if other CDN-based websites work

## Technical Details

### How the Library Loads

1. Browser loads `index.html`
2. Browser fetches Supabase library from CDN
3. Library exposes itself as `window.supabase`
4. React app initializes
5. `initializeSupabase()` function runs
6. Function checks for `window.supabase`
7. If found, creates Supabase client

### Retry Mechanism

The app includes a retry mechanism:
- First attempt: Immediate on React mount
- Second attempt: 500ms delay if first fails
- This handles timing issues automatically

### Debug Mode

To enable detailed logging:

1. Open browser console
2. Run: `localStorage.setItem('debug', 'true')`
3. Refresh the page
4. Check console for detailed logs

## Prevention

To avoid this issue in the future:

1. **Use config.js**: Pre-configure credentials in config.js file
2. **Test regularly**: Verify connection after browser updates
3. **Keep backups**: Export your configuration
4. **Document setup**: Note any special network requirements

## Related Issues

- "Configuration not saving" → See COLLABORATIVE_SETUP.md
- "Connection failed" → Different issue, credentials problem
- "Session not found" → Database issue, not library issue

---

**Last Updated:** October 11, 2025
