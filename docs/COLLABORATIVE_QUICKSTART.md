# Collaborative Mode - Quick Start Guide

Get your team collaborating in real-time in under 10 minutes!

## Prerequisites

- ✅ A Supabase account (free tier is fine)
- ✅ 10 minutes for setup
- ✅ Basic text editor skills

## 5-Minute Setup

### Step 1: Create Supabase Project (2 min)

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Enter:
   - Name: `ideo-sprint`
   - Password: (create a strong one)
   - Region: (closest to you)
4. Click "Create new project"
5. Wait for setup to complete

### Step 2: Set Up Database (2 min)

1. Click "SQL Editor" in left sidebar
2. Click "New Query"
3. Open `supabase-setup.sql` from this package
4. Copy all the SQL code
5. Paste into Supabase SQL editor
6. Click "Run"
7. Verify success message

### Step 3: Enable Real-time (1 min)

1. Go to "Database" → "Replication"
2. Find `session_data` table
3. Toggle the switch to ON
4. Done!

### Step 4: Get Your Credentials (2 min)

1. Click "Settings" (gear icon)
2. Click "API"
3. Copy these two values:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon public key** (long string starting with `eyJ...`)

### Step 5: Configure the Game (2 min)

1. Open `index.html` in a text editor
2. Find these lines (around line 82):
   ```javascript
   const SUPABASE_URL = 'https://your-project-ref.supabase.co';
   const SUPABASE_ANON_KEY = 'your-anon-key';
   ```
3. Replace with your actual values:
   ```javascript
   const SUPABASE_URL = 'https://xxxxx.supabase.co';
   const SUPABASE_ANON_KEY = 'eyJhbGc...your-actual-key';
   ```
4. Save the file

## Test It! (2 min)

### Solo Test

1. Open `index.html` in your browser
2. Click "Collaborative" mode
3. Enter your name
4. Click "Create Session"
5. You should see a session code!

### Multi-User Test

1. Copy the session code
2. Open another browser window (or share with a friend)
3. Click "Collaborative" mode
4. Enter a different name
5. Paste the session code
6. Click "Join"
7. Both windows should show both participants!

## Using It

### As Host

1. **Create Session**
   - Click "Collaborative"
   - Enter your name
   - Click "Create Session"
   - Share the session code with your team

2. **Wait for Participants**
   - Watch the participants list
   - Wait for everyone to join

3. **Start the Sprint**
   - Click "Start Design Sprint"
   - Everyone sees the challenge
   - Facilitate through the phases

4. **Advance Phases**
   - Only you can click "Next Phase"
   - Wait for team contributions
   - Move forward when ready

### As Participant

1. **Join Session**
   - Get session code from host
   - Click "Collaborative"
   - Enter your name
   - Paste code and click "Join"

2. **Contribute**
   - Submit your ideas
   - Vote on ideas
   - Add to prototype
   - Share iteration thoughts

3. **Follow Along**
   - Host controls phase progression
   - Your contributions appear in real-time
   - Everyone sees the same state

## Quick Tips

### For Best Results

✅ **Do:**
- Test before your actual workshop
- Share session code in advance
- Use clear, identifiable names
- Have backup communication (Zoom, etc.)
- Export results immediately after

❌ **Don't:**
- Start without testing first
- Use generic names like "User1"
- Close browser during session
- Forget to share session code

### Common Issues

**"Supabase not configured"**
- Check you replaced BOTH the URL and key
- Make sure they're in quotes
- No extra spaces

**"Session not found"**
- Double-check the session code
- Make sure it's not older than 24 hours
- Try creating a new session

**Ideas not syncing**
- Check real-time is enabled in Supabase
- Refresh the page
- Check browser console for errors

## What's Synced?

✅ **Real-time Sync:**
- All ideas (with author names)
- Selected ideas
- Current phase
- Timer state
- Prototype content
- Iteration notes
- Participant list

❌ **Not Synced:**
- Draft ideas (before you submit)
- Individual scores
- Settings preferences

## Sharing Your Session

### Via Video Call
1. Create session
2. Share screen showing session code
3. Participants copy and join
4. Continue with video on

### Via Email/Chat
1. Create session
2. Copy session code
3. Send to participants:
   ```
   Join our design sprint!
   1. Open the game
   2. Click "Collaborative"
   3. Enter your name
   4. Use code: [paste code here]
   ```

### In Person
1. Project game on screen
2. Everyone joins on their devices
3. All contribute individually
4. See results together

## After Your Session

1. **Export Results**
   - Click download button
   - Save the PDF
   - Share with team

2. **Share Session Code**
   - Participants can rejoin later
   - Session lasts 24 hours
   - Export before it expires

3. **Gather Feedback**
   - How was the experience?
   - Any technical issues?
   - What could be better?

## Need More Help?

- **Setup Issues**: See `COLLABORATIVE_SETUP.md`
- **Feature Details**: See `COLLABORATIVE_FEATURES.md`
- **General Usage**: See `DOCUMENTATION.md`
- **Facilitation Tips**: See `FACILITATOR_GUIDE.md`

## Cost

**Supabase Free Tier:**
- 500 MB database
- 2 GB bandwidth/month
- 50,000 monthly active users
- Unlimited API requests

**Typical Usage:**
- Each session: ~10-50 KB
- 100 sessions: ~5 MB
- Well within free tier!

## Next Steps

Once you're comfortable:

1. ✅ Run a practice session with colleagues
2. ✅ Try with a small group (3-5 people)
3. ✅ Scale up to larger workshops
4. ✅ Customize challenges for your team
5. ✅ Share feedback and suggestions

## Quick Reference

### Host Actions
- Create session
- Share session code
- Start the sprint
- Advance phases
- Export results

### Participant Actions
- Join with code
- Submit ideas
- Vote on ideas
- Contribute to prototype
- Add iteration notes

### Session Lifecycle
1. Create/Join
2. Wait for all participants
3. Host starts
4. Collaborate through phases
5. Export results
6. Session expires in 24 hours

---

**Ready to collaborate?** 🚀

Open `index.html`, click "Collaborative", and start your first session!

For detailed setup, see `COLLABORATIVE_SETUP.md`
