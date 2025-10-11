# Collaborative Mode Setup Guide

This guide will help you set up real-time collaborative features for the IDEO Design Sprint Game using Supabase.

## Prerequisites

- A Supabase account (free tier works fine)
- Basic understanding of environment variables

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - **Project Name**: `ideo-design-sprint` (or your choice)
   - **Database Password**: Create a strong password
   - **Region**: Choose closest to your users
5. Click "Create new project" and wait for setup to complete

## Step 2: Set Up Database Schema

1. In your Supabase project dashboard, click "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy the entire contents of `supabase-setup.sql` from this repository
4. Paste into the SQL editor
5. Click "Run" to execute the SQL
6. Verify tables were created by checking the "Table Editor" section

## Step 3: Get Your Supabase Credentials

1. In your Supabase project dashboard, click "Settings" (gear icon)
2. Click "API" in the settings menu
3. You'll need two values:
   - **Project URL**: Found under "Project URL" (e.g., `https://xxxxx.supabase.co`)
   - **Anon/Public Key**: Found under "Project API keys" → "anon public"

## Step 4: Configure the Game

You have two options to configure Supabase credentials:

### Option A: Using the Settings UI (Recommended)

1. Open `index.html` in your browser
2. Click the **Settings** (gear icon) button in the top-right corner
3. Scroll to the **"Collaborative Mode Configuration"** section at the top
4. Enter your **Supabase URL** (e.g., `https://xxxxx.supabase.co`)
5. Enter your **Supabase Anon Key** (starts with `eyJ...`)
6. Click **"Test Connection"** to verify your credentials work
7. Click **"Save Configuration"** to store them locally

**Benefits:**
- ✅ No code editing required
- ✅ Credentials stored in browser localStorage
- ✅ Easy to update or clear
- ✅ Test connection before saving
- ✅ Works immediately without page refresh

### Option B: Using config.js File

1. Create or edit `config.js` in the same directory as `index.html`
2. Add the following code:

```javascript
// Supabase configuration
window.SUPABASE_CONFIG = {
  url: "https://xxxxx.supabase.co",  // Your Project URL
  anonKey: "eyJhbGc..."  // Your anon public key
};
```

3. Save the file
4. Refresh the page

**Benefits:**
- ✅ Configuration persists across browser sessions
- ✅ Can be version controlled (if not sensitive)
- ✅ Shared across all users of the same file

### Configuration Priority

If both methods are used, **Settings UI (localStorage) takes priority** over config.js. This allows:
- Default configuration in config.js for all users
- Individual overrides via Settings UI for testing or different environments

## Step 5: Test the Setup

1. Open `index.html` in your browser
2. Select "Collaborative" mode
3. Enter your name
4. Click "Create Session"
5. You should see a session code appear
6. Open another browser window/tab (or share with a colleague)
7. Select "Collaborative" mode
8. Enter a different name
9. Paste the session code and click "Join"
10. Both windows should now show the same participants list

## Step 6: Enable Real-time (Important!)

1. In Supabase dashboard, go to "Database" → "Replication"
2. Find the `session_data` table
3. Toggle the switch to enable replication
4. This allows real-time updates across all participants

## Security Considerations

### Current Setup (Development)

The default setup uses public access policies, which means:
- ✅ Easy to set up and test
- ✅ No authentication required
- ⚠️ Anyone with a session code can join
- ⚠️ No data encryption beyond HTTPS

### Production Recommendations

For production use, consider:

1. **Enable Supabase Auth**:
   ```sql
   -- Update policies to require authentication
   CREATE POLICY "Authenticated users only" 
     ON session_data FOR ALL 
     USING (auth.role() = 'authenticated');
   ```

2. **Add Session Passwords**:
   - Modify the sessions table to include a password hash
   - Require password when joining sessions

3. **Implement Rate Limiting**:
   - Use Supabase Edge Functions to limit session creation
   - Prevent spam and abuse

4. **Data Retention**:
   - The included cleanup function deletes sessions older than 24 hours
   - Adjust retention period based on your needs
   - Enable pg_cron extension to automate cleanup

## Troubleshooting

### "Supabase not configured" Error

**Using Settings UI:**
- Open Settings and check the configuration status indicator
- Verify the URL format is correct (must start with `https://`)
- Verify the Anon Key starts with `eyJ`
- Click "Test Connection" to diagnose the issue
- Try clearing and re-entering the credentials

**Using config.js:**
- Verify you've replaced the placeholder URL and key
- Check that the values are wrapped in quotes
- Ensure no extra spaces or line breaks
- Verify the file is named exactly `config.js`
- Check browser console for loading errors

### Configuration Not Saving

- Check if localStorage is enabled in your browser
- Try clearing browser cache and localStorage
- Verify you're not in private/incognito mode (localStorage may be restricted)
- Check browser console for quota exceeded errors

### Real-time Updates Not Working

- Verify real-time is enabled for `session_data` table
- Check browser console for connection errors
- Ensure your Supabase project is active (not paused)

### Session Not Found

- Verify the session code is correct (case-sensitive)
- Check that the session hasn't been cleaned up (>24 hours old)
- Ensure database tables were created successfully

### Ideas Not Syncing

- Check browser console for errors
- Verify the `updateSessionData` function is being called
- Test with a fresh session

## Usage Tips

### For Hosts

- Share the session code before starting
- Wait for all participants to join before starting the sprint
- Only the host can advance phases
- Monitor the participants list to see who's connected

### For Participants

- Join the session before the host starts
- Your ideas will appear with your name
- You can vote on ideas during the selection phase
- All participants see the same timer and phase

## Cost Considerations

### Supabase Free Tier Includes:

- 500 MB database space
- 2 GB bandwidth per month
- 50,000 monthly active users
- Unlimited API requests

### Typical Usage:

- Each session: ~10-50 KB
- 100 concurrent sessions: ~5 MB
- Real-time connections: Minimal bandwidth

**The free tier is sufficient for most educational and workshop use cases.**

## Advanced Configuration

### Custom Session Duration

Edit the cleanup function in `supabase-setup.sql`:

```sql
-- Change 24 hours to your preferred duration
DELETE FROM sessions 
WHERE created_at < NOW() - INTERVAL '7 days';
```

### Add Session Metadata

Extend the sessions table:

```sql
ALTER TABLE sessions ADD COLUMN session_name TEXT;
ALTER TABLE sessions ADD COLUMN max_participants INTEGER DEFAULT 10;
```

### Export Session Data

Query all session data:

```sql
SELECT 
  s.id,
  s.created_at,
  sd.data
FROM sessions s
JOIN session_data sd ON s.id = sd.session_id
WHERE s.created_at > NOW() - INTERVAL '7 days';
```

## Support

For issues specific to:
- **Supabase**: Check [Supabase Documentation](https://supabase.com/docs)
- **Game Features**: See `DOCUMENTATION.md` and `FACILITATOR_GUIDE.md`
- **Database Schema**: Review `supabase-setup.sql`

## Next Steps

Once collaborative mode is working:

1. Test with a small group
2. Gather feedback on the experience
3. Adjust timer settings for your use case
4. Consider adding custom challenges for your team
5. Export and share results after sessions

---

**Ready to collaborate!** 🚀

Share the session code with your team and start your design sprint together.
