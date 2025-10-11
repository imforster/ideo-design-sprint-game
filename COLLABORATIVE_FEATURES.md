# Collaborative Mode Features

## Overview

Collaborative mode enables real-time, multi-participant design sprints where team members can contribute simultaneously from different locations.

## Key Features

### 🔗 Session Management

**Create Session**
- Host creates a session and receives a unique session code
- Session code is shareable via any communication channel
- Host controls when the sprint starts

**Join Session**
- Participants enter the session code to join
- All participants see each other in the participants list
- Real-time presence indicators show who's connected

### 👥 Participant Roles

**Host**
- Creates the session
- Controls phase progression
- Starts the design sprint
- Can advance to next phases
- Sees all participant contributions

**Participant**
- Joins using session code
- Contributes ideas and feedback
- Votes on ideas during selection
- Sees real-time updates from all participants
- Cannot advance phases (host-controlled)

### 💡 Real-time Collaboration

**Synchronized State**
- All participants see the same challenge
- Timer syncs across all devices
- Phase transitions happen simultaneously
- Ideas appear in real-time as they're submitted

**Individual Contributions**
- Each idea is attributed to its author
- Participants see who contributed what
- Voting is collaborative (all can vote)
- Prototype building is shared

### 🎯 Collaborative Workflow

#### Phase 1: Empathize
- Host starts the sprint
- All participants see the challenge
- Each participant can submit their HMW statement
- Host advances when ready

#### Phase 2: Ideate
- Timer starts for all participants
- Each participant submits ideas
- Ideas appear with author names
- All ideas are visible to everyone
- Minimum 5 ideas required to proceed

#### Phase 3: Select
- All participants can vote on ideas
- Select top 3 ideas collaboratively
- Real-time vote counts
- Host advances when 3 are selected

#### Phase 4: Prototype
- Collaborative prototype description
- All participants can contribute
- Images can be uploaded
- Host advances when complete

#### Phase 5: Iterate
- Shared iteration notes
- All participants can add feedback
- Final results visible to everyone

## Technical Details

### Data Synchronization

**What's Synced:**
- Current phase
- Challenge details
- All ideas with authors
- Selected ideas
- Prototype content
- Iteration notes
- Timer state
- Participant list

**What's Local:**
- Draft ideas (before submission)
- Individual scores
- UI preferences

### Real-time Updates

**Update Frequency:**
- Instant for idea submissions
- Instant for phase changes
- Instant for participant joins/leaves
- Sub-second latency for most actions

**Conflict Resolution:**
- Last write wins for most fields
- Ideas are append-only (no conflicts)
- Host has priority for phase control

## Usage Scenarios

### Remote Workshop

1. Host creates session before workshop
2. Shares session code via video call
3. Participants join from their devices
4. Host facilitates and advances phases
5. All contribute in real-time
6. Export results at the end

### Distributed Team Sprint

1. Schedule sprint time across time zones
2. Host creates session at start time
3. Team members join asynchronously
4. Host manages pacing
5. Ideas accumulate from all members
6. Collaborative voting and iteration

### Hybrid Session

1. Some participants in-room, others remote
2. All join the same session
3. In-room participants use individual devices
4. Remote participants join via video + game
5. Equal participation from all locations

### Asynchronous Collaboration

1. Host creates session and shares code
2. Participants join when available
3. Ideas accumulate over time
4. Host advances phases when ready
5. Flexible participation timing

## Best Practices

### For Hosts

✅ **Do:**
- Test the session before the workshop
- Share session code in advance
- Wait for all participants to join
- Explain the process before starting
- Monitor the participants list
- Give clear time expectations
- Export results immediately after

❌ **Don't:**
- Start before everyone joins
- Rush through phases
- Advance without checking participation
- Forget to share the session code

### For Participants

✅ **Do:**
- Join a few minutes early
- Test your connection
- Use a clear, identifiable name
- Contribute actively
- Respect the timer
- Vote thoughtfully

❌ **Don't:**
- Join late without notice
- Use generic names (e.g., "User1")
- Submit duplicate ideas
- Leave without notice

### For Facilitators

**Preparation:**
- Set up Supabase in advance
- Test with a colleague
- Prepare backup communication channel
- Have session code ready to share

**During Sprint:**
- Monitor participant count
- Encourage equal participation
- Manage time effectively
- Address technical issues quickly

**After Sprint:**
- Export results immediately
- Share with all participants
- Gather feedback on the experience
- Document lessons learned

## Troubleshooting

### Participants Can't Join

**Check:**
- Session code is correct (case-sensitive)
- Supabase is configured properly
- Session hasn't expired (>24 hours)
- Network connectivity

**Solution:**
- Verify session code
- Create a new session if needed
- Check browser console for errors

### Ideas Not Appearing

**Check:**
- Real-time is enabled in Supabase
- Browser console for errors
- Network connectivity
- Participant is actually submitting

**Solution:**
- Refresh the page
- Rejoin the session
- Check Supabase dashboard

### Phase Not Advancing

**Check:**
- User is the host
- Requirements are met (e.g., 5 ideas)
- Network connectivity

**Solution:**
- Verify host status
- Check phase requirements
- Refresh if needed

### Timer Out of Sync

**Check:**
- Network latency
- Browser tab is active
- Real-time connection status

**Solution:**
- Refresh the page
- Host can restart timer
- Continue manually if needed

## Limitations

### Current Version

- Maximum recommended participants: 20
- Session duration: 24 hours before cleanup
- No chat functionality (use external tools)
- No video/audio (use external tools)
- No session recovery after browser close
- No edit/delete for submitted ideas

### Planned Improvements

- Session passwords
- Participant permissions
- Idea editing/deletion
- Session history
- Export to multiple formats
- Integration with video tools

## Security & Privacy

### Data Storage

- All session data stored in Supabase
- Encrypted in transit (HTTPS)
- Encrypted at rest (Supabase default)
- Automatic cleanup after 24 hours

### Access Control

- Session code required to join
- No authentication by default
- Public read/write access
- Consider adding auth for production

### Privacy Considerations

- Participant names are visible to all
- Ideas are attributed to authors
- Session codes are not secret
- No personal data collected beyond names

## Integration Tips

### With Video Conferencing

- Use Zoom/Teams for audio/video
- Share screen to show game
- Or have everyone join individually
- Use breakout rooms for sub-groups

### With Project Management

- Export results to Jira/Asana
- Link session to project
- Track ideas as tasks
- Follow up on prototypes

### With Documentation

- Export to PDF
- Share via email
- Archive in knowledge base
- Reference in project docs

## Support

For setup help, see `COLLABORATIVE_SETUP.md`

For general usage, see `DOCUMENTATION.md`

For facilitation tips, see `FACILITATOR_GUIDE.md`

---

**Happy Collaborating!** 🤝
